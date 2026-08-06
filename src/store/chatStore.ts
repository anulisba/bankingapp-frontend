import { create } from "zustand";
import type {
    ChatMessage,
    ChatThread,
} from "../services/chat";

import type { NextBestAction } from '../services/chat'

interface ChatState {
    threads: ChatThread[];

    selectedThread: string | null;

    messages: ChatMessage[];

    nextActions: NextBestAction[];

    chartData: unknown | null;

    isPaused: boolean;

    loading: boolean;

    streaming: boolean;

    setThreads: (threads: ChatThread[]) => void;

    setSelectedThread: (threadId: string | null) => void;

    setMessages: (messages: ChatMessage[]) => void;

    addMessage: (message: ChatMessage) => void;

    updateLastAssistantMessage: (content: string) => void;

    appendAssistantChunk: (chunk: string) => void;

    setNextActions: (actions: NextBestAction[]) => void;

    setChartData: (chart: unknown) => void;

    setPaused: (paused: boolean) => void;

    setLoading: (loading: boolean) => void;

    setStreaming: (streaming: boolean) => void;

    clearChat: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
    threads: [],

    selectedThread: null,

    messages: [],

    nextActions: [],

    chartData: null,

    isPaused: false,

    loading: false,

    streaming: false,

    setThreads: (threads) =>
        set({
            threads,
        }),

    setSelectedThread: (threadId) =>
        set({
            selectedThread: threadId,
        }),

    setMessages: (messages) =>
        set({
            messages,
        }),

    addMessage: (message) =>
        set((state) => ({
            messages: [...state.messages, message],
        })),

    updateLastAssistantMessage: (content) =>
        set((state) => {
            const messages = [...state.messages];

            if (
                messages.length &&
                messages[messages.length - 1].role === "assistant"
            ) {
                messages[messages.length - 1] = {
                    ...messages[messages.length - 1],
                    content,
                };
            }

            return { messages };
        }),
    appendAssistantChunk: (chunk) =>
        set((state) => {

            const messages = [...state.messages];

            const last = messages[messages.length - 1];

            if (
                last &&
                last.role === "assistant"
            ) {
                last.content += chunk;
            }

            return { messages };

        }),
    setNextActions: (actions) =>
        set({
            nextActions: actions,
        }),

    setChartData: (chart) =>
        set({
            chartData: chart,
        }),

    setPaused: (paused) =>
        set({
            isPaused: paused,
        }),

    setLoading: (loading) =>
        set({
            loading,
        }),

    setStreaming: (streaming) =>
        set({
            streaming,
        }),

    clearChat: () =>
        set({
            messages: [],
            nextActions: [],
            chartData: null,
            selectedThread: null,
            isPaused: false,
        }),
}));