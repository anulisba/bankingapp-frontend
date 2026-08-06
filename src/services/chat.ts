import axios from "axios";
import { langgraphUrl } from "./api";

const chatApi = axios.create({
    baseURL: langgraphUrl,
    withCredentials: true,
});

export interface ChatThread {
    thread_id: string;
    title: string;
    created_at: string;
}
export interface NextBestAction {
    label: string
}
export interface ChatMessage {
    id: string;
    role: "user" | "assistant" | "thought";
    content: string;
    has_image?: boolean;
}

export interface ChatHistory {
    messages: ChatMessage[];
    is_paused: boolean;
}

export async function getThreads(userId: string) {

    const response = await chatApi.get<ChatThread[]>(
        "/chat/threads",
        {
            params: {
                user_id: userId,
            },
        }
    );

    return response.data;
}

export async function getHistory(threadId: string) {

    const response =
        await chatApi.get<ChatHistory>(
            "/chat/history",
            {
                params: {
                    thread_id: threadId,
                },
            }
        );

    return response.data;
}
export async function streamChat(
    threadId: string,
    userId: string,
    message: string,
    action?: string,
    image?: File
) {
    const formData = new FormData();

    formData.append("thread_id", threadId);
    formData.append("user_id", userId);
    formData.append("message", message);

    if (action) {
        formData.append("action", action);
    }

    if (image) {
        formData.append("image", image);
    }

    const response = await fetch(
        `${langgraphUrl}/chat/stream`,
        {
            method: "POST",
            credentials: "include",
            body: formData,
        }
    );

    if (!response.ok) {
        throw new Error("Unable to connect to LangGraph");
    }

    return response.body;
}