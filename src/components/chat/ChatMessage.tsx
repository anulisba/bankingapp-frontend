import { Box, Typography } from "@mui/material";
import type { ChatMessage } from "../../services/chat";

interface Props {
    message: ChatMessage;
}

export default function ChatMessage({ message }: Props) {
    const isUser = message.role === "user";
    const isThought = message.role === "thought";

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: isUser ? "flex-end" : "flex-start",
                mb: 2,
            }}
        >
            <Box
                sx={{
                    maxWidth: "75%",
                    px: 2,
                    py: 1.5,
                    borderRadius: 3,

                    bgcolor: isThought
                        ? "#F8FAFC"
                        : isUser
                            ? "#2563EB"
                            : "#FFFFFF",

                    color: isUser ? "#fff" : "#0F172A",

                    border: isUser
                        ? "none"
                        : "1px solid #E2E8F0",
                }}
            >
                {isThought && (
                    <Typography
                        variant="caption"
                        sx={{
                            color: "#64748B",
                            display: "block",
                            mb: 1,
                            fontWeight: 600,
                        }}
                    >
                        Reasoning
                    </Typography>
                )}

                <Typography
                    sx={{
                        whiteSpace: "pre-wrap",
                        lineHeight: 1.7,
                    }}
                >
                    {message.content}
                </Typography>
            </Box>
        </Box>
    );
}