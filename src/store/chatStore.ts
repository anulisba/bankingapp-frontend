import { create } from "zustand";

export interface ChatMessage {
    id: string;
    role: "user" | "assistant";
    content: string;
    reasoning?: string[];
}

interface ChatStore {
    messages: ChatMessage[];

    addMessage: (message: ChatMessage) => void;

    clearMessages: () => void;

    updateLastAssistantMessage: (text: string) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
    messages: [],

    addMessage: (message) =>
        set((state) => ({
            messages: [...state.messages, message],
        })),

    clearMessages: () =>
        set({
            messages: [],
        }),

    updateLastAssistantMessage: (text) =>
        set((state) => {
            const messages = [...state.messages];

            for (let i = messages.length - 1; i >= 0; i--) {
                if (messages[i].role === "assistant") {
                    messages[i] = {
                        ...messages[i],
                        content: text,
                    };
                    break;
                }
            }

            return { messages };
        }),
}));