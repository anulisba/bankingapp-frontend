import {
    createContext,
    useContext,
    useEffect,
    type ReactNode,
} from "react";

import { useAuthStore } from "../store/authStore";
import { useChatStore } from "../store/chatStore";
import { getHistory, getThreads, streamChat } from "../services/chat";
interface ChatContextType {
    sendMessage: (message: string) => Promise<void>;
}

const ChatContext = createContext<ChatContextType | null>(null);

export function ChatProvider({
    children,
}: {
    children: ReactNode;
}) {
    const user = useAuthStore((state) => state.user);

    const {
        selectedThread,
        setThreads,
        setSelectedThread,
        setMessages,
        setPaused,
        setLoading,
        addMessage,
        updateLastAssistantMessage,
        setStreaming,
        setNextActions,
        setChartData,
    } = useChatStore();

    useEffect(() => {

        async function initializeChat() {

            if (!user) return;

            setLoading(true);

            try {

                const threads = await getThreads(user.user_name);

                setThreads(threads);

                if (threads.length === 0) {

                    setLoading(false);

                    return;
                }

                const latestThread = threads[0];

                setSelectedThread(
                    latestThread.thread_id
                );

                const history =
                    await getHistory(
                        latestThread.thread_id
                    );

                setMessages(history.messages);

                setPaused(history.is_paused);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }
        }

        initializeChat();

    }, [user]);

    async function sendMessage(message: string) {

        if (!user || !selectedThread) return;

        // Show user message immediately
        addMessage({
            role: "user",
            content: message,
        });

        // Create an empty assistant bubble
        addMessage({
            role: "assistant",
            content: "",
        });

        setStreaming(true);

        try {

            const stream = await streamChat(
                selectedThread,
                user.user_name,
                message
            );

            if (!stream) return;

            await parseStream(stream);

        } catch (err) {

            console.error(err);

        } finally {

            setStreaming(false);

        }

    }
    function handleEvent(eventText: string) {

        const lines =
            eventText.split("\n");

        let event = "";

        let data = "";

        for (const line of lines) {

            if (line.startsWith("event:")) {

                event = line.replace(
                    "event:",
                    ""
                ).trim();

            }

            if (line.startsWith("data:")) {

                data = line.replace(
                    "data:",
                    ""
                ).trim();

            }

        }

        switch (event) {

            case "message":

                updateLastAssistantMessage(
                    data.replace(/\\n/g, "\n")
                );

                break;

            case "thought":

                console.log("Thought:", data);

                break;

            case "next_actions":

                setNextActions(
                    JSON.parse(data)
                );

                break;

            case "chart_data":

                setChartData(
                    JSON.parse(data)
                );

                break;

            default:

                console.log(
                    event,
                    data
                );

        }

    }
    async function parseStream(
        stream: ReadableStream<Uint8Array>
    ) {

        const reader = stream.getReader();

        const decoder = new TextDecoder();

        let buffer = "";

        while (true) {

            const { value, done } =
                await reader.read();

            if (done) break;

            buffer += decoder.decode(value, {
                stream: true,
            });

            const events = buffer.split("\n\n");

            buffer = events.pop() ?? "";

            for (const eventText of events) {

                handleEvent(eventText);

            }

        }

    }

    return (
        <ChatContext.Provider
            value={{
                sendMessage,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useChat() {

    const context = useContext(ChatContext);

    if (!context) {
        throw new Error(
            "useChat must be used inside ChatProvider"
        );
    }

    return context;
}