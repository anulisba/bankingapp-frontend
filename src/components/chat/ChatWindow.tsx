import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

import { useChatStore } from "../../store/chatStore";

import ChatMessage from "./ChatMessage";
import NextBestActions from "./NextBestActions";
import ChartRenderer from "./ChartRenderer";

export default function ChatWindow() {

    const messages = useChatStore((s) => s.messages);
    const loading = useChatStore((s) => s.loading);

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    if (loading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 8,
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (messages.length === 0) {
        return (
            <Box
                sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography color="text.secondary">
                    Start a new conversation
                </Typography>
            </Box>
        );
    }

    return (
        <Box>

            {messages.map((message) => (
                <ChatMessage
                    key={message.id}
                    message={message}
                />
            ))}

            <NextBestActions />

            <ChartRenderer />

            <div ref={bottomRef} />

        </Box>
    );
}