import { useState } from "react";
import { Box, IconButton, InputBase, Paper, Tooltip, Typography } from "@mui/material";

import { AttachFileRounded, SendRounded, MicRounded, LockRounded } from "@mui/icons-material";
import { useChat } from "../../context/ChatProvider";
export default function ChatInput() {
    const [message, setMessage] = useState("");
    const { sendMessage } = useChat();
    const handleSend = async () => {

        if (!message.trim()) return;

        const text = message.trim();

        setMessage("");

        await sendMessage(text);

    };

    const handleKeyDown = async (
        e: React.KeyboardEvent
    ) => {

        if (e.key === "Enter" && !e.shiftKey) {

            e.preventDefault();

            await handleSend();

        }

    };

    return (
        <Box>
            <Paper
                elevation={0}
                sx={{
                    borderRadius: "24px",
                    border: "1px solid #E2E8F0",
                    backgroundColor: "#FFFFFF",
                    px: 1,
                    py: 0.5,
                    transition: "all .25s ease",
                    "&:focus-within": {
                        borderColor: "#2563EB",
                        boxShadow: "0 0 0 4px rgba(37,99,235,.08)",
                    },
                }}
            >
                <Box sx={{ display: "flex", alignItems: "flex-end", gap: 1 }}>
                    <Tooltip title="Attach Image">
                        <IconButton>
                            <AttachFileRounded />
                        </IconButton>
                    </Tooltip>

                    <InputBase
                        multiline
                        maxRows={6}
                        placeholder="Ask Banking Agent anything..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        sx={{
                            flex: 1,
                            px: 1,
                            py: 0.8,
                            fontSize: 15,
                            "& textarea": { resize: "none" },
                        }}
                    />

                    <Tooltip title="Voice (Coming Soon)">
                        <span>
                            <IconButton disabled>
                                <MicRounded />
                            </IconButton>
                        </span>
                    </Tooltip>

                    <IconButton
                        onClick={handleSend}
                        disabled={!message.trim()}
                        sx={{
                            bgcolor: "primary.main",
                            color: "#fff",
                            width: 46,
                            height: 46,
                            "&:hover": {
                                bgcolor: "primary.dark",
                                transform: "translateY(-2px)",
                            },
                            "&.Mui-disabled": {
                                bgcolor: "#CBD5E1",
                                color: "#fff",
                            },
                            transition: ".2s",
                        }}
                    >
                        <SendRounded />
                    </IconButton>
                </Box>
            </Paper>

            <Typography
                sx={{
                    mt: 1.2,
                    textAlign: "center",
                    fontSize: 12,
                    color: "#94A3B8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0.5,
                }}
            >
                <LockRounded sx={{ fontSize: 13 }} />
                Banking Agent can make mistakes. Please verify important information.
            </Typography>
        </Box>
    );
}