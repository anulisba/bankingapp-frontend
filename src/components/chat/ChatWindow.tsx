import { useEffect, useRef, useState } from "react";
import { Box, Chip, IconButton, Paper, Stack, Tooltip, Typography, keyframes } from "@mui/material";
import { useChatStore } from "../../store/chatStore";

const reasoningSteps = [
    "Checking account information...",
    "Retrieving customer profile...",
    "Preparing response...",
];

const dummyReplies = [
    "Here's what I found for your account. Your current balance looks good, and there are no pending transactions that need your attention.",
    "I've pulled up the details you asked about. Let me know if you'd like me to break anything down further.",
    "Got it — I checked that for you. Everything looks in order based on the latest records.",
];

const fadeInUp = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`;

const dotBounce = keyframes`
    0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
    30% { transform: translateY(-4px); opacity: 1; }
`;

const stepIn = keyframes`
    from { opacity: 0; transform: translateX(-6px); }
    to { opacity: 1; transform: translateX(0); }
`;

export default function ChatWindow() {
    const messages = useChatStore((state) => state.messages);
    const addMessage = useChatStore((state) => state.addMessage);
    const hasMessages = messages.length > 0;

    const [isThinking, setIsThinking] = useState(false);
    const [visibleSteps, setVisibleSteps] = useState(0);
    const lastHandledIndex = useRef(-1);

    useEffect(() => {
        if (messages.length === 0) return;
        const lastIndex = messages.length - 1;
        const lastMessage = messages[lastIndex];

        if (lastMessage.role === "user" && lastIndex !== lastHandledIndex.current) {
            lastHandledIndex.current = lastIndex;
            setIsThinking(true);
            setVisibleSteps(0);

            let step = 0;
            const stepInterval = setInterval(() => {
                step += 1;
                setVisibleSteps(step);
                if (step >= reasoningSteps.length) clearInterval(stepInterval);
            }, 550);

            const timeout = setTimeout(() => {
                clearInterval(stepInterval);
                setIsThinking(false);
                const reply = dummyReplies[Math.floor(Math.random() * dummyReplies.length)];
                addMessage({
                    role: "assistant",
                    content: reply,
                    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                });
            }, 2200);

            return () => {
                clearInterval(stepInterval);
                clearTimeout(timeout);
            };
        }
    }, [messages, addMessage]);

    if (!hasMessages) {
        return (
            <Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ maxWidth: 700, textAlign: "center", animation: `${fadeInUp} 0.4s ease both` }}>
                    <Typography sx={{ fontSize: 42, fontWeight: 700, color: "#0F172A" }}>
                        Good Evening
                    </Typography>

                    <Typography sx={{ mt: 2, color: "#64748B", fontSize: 18 }}>
                        How can I help you today?
                    </Typography>

                    <Stack direction="row" spacing={2} justifyContent="center" mt={6} flexWrap="wrap">
                        {["Check Balance", "Transfer Money", "Transaction History"].map((label, i) => (
                            <Chip
                                key={label}
                                label={label}
                                clickable
                                sx={{
                                    p: 2.8,
                                    borderRadius: 3,
                                    animation: `${fadeInUp} 0.4s ease both`,
                                    animationDelay: `${0.1 + i * 0.08}s`,
                                    transition: "transform 0.15s ease, box-shadow 0.15s ease",
                                    "&:hover": {
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 6px 16px rgba(15,23,42,.08)",
                                    },
                                }}
                            />
                        ))}
                    </Stack>
                </Box>
            </Box>
        );
    }

    return (
        <Stack spacing={3}>
            {messages.map((message, index) => {
                const isUser = message.role === "user";

                return (
                    <Stack
                        key={index}
                        spacing={0.5}
                        alignItems={isUser ? "flex-end" : "flex-start"}
                        sx={{ animation: `${fadeInUp} 0.35s ease both` }}
                    >
                        <Box sx={{ maxWidth: "65%" }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    px: 2.5,
                                    py: 1.6,
                                    borderRadius: 3,
                                    bgcolor: isUser ? "#2563EB" : "#FFFFFF",
                                    color: isUser ? "#FFFFFF" : "#0F172A",
                                    border: isUser ? "none" : "1px solid #EEF1F5",
                                    boxShadow: isUser ? "none" : "0 2px 10px rgba(15,23,42,.04)",
                                }}
                            >
                                <Typography sx={{ whiteSpace: "pre-wrap", lineHeight: 1.7, fontSize: 14.5 }}>
                                    {message.content}
                                </Typography>
                            </Paper>

                            <Typography fontSize={11} color="text.secondary" sx={{ mt: 0.5, px: 0.5 }}>
                                {message.time}
                            </Typography>

                            {!isUser && (
                                <Stack direction="row" spacing={0.5} sx={{ mt: 0.25, px: 0.5 }}>
                                    <Tooltip title="Copy">
                                        <IconButton size="small" />
                                    </Tooltip>
                                    <Tooltip title="Good response">
                                        <IconButton size="small" />
                                    </Tooltip>
                                    <Tooltip title="Bad response">
                                        <IconButton size="small" />
                                    </Tooltip>
                                </Stack>
                            )}
                        </Box>
                    </Stack>
                );
            })}

            {isThinking && (
                <Stack
                    spacing={0.5}
                    alignItems="flex-start"
                    sx={{ animation: `${fadeInUp} 0.3s ease both` }}
                >
                    <Box sx={{ maxWidth: "65%" }}>
                        <Paper
                            elevation={0}
                            sx={{
                                px: 2.5,
                                py: 1.8,
                                borderRadius: 3,
                                bgcolor: "#FFFFFF",
                                border: "1px solid #EEF1F5",
                                boxShadow: "0 2px 10px rgba(15,23,42,.04)",
                            }}
                        >
                            <Stack direction="row" spacing={0.6} alignItems="center" sx={{ mb: 1.2 }}>
                                {[0, 1, 2].map((i) => (
                                    <Box
                                        key={i}
                                        sx={{
                                            width: 6,
                                            height: 6,
                                            borderRadius: "50%",
                                            bgcolor: "#2563EB",
                                            animation: `${dotBounce} 1s ease-in-out infinite`,
                                            animationDelay: `${i * 0.15}s`,
                                        }}
                                    />
                                ))}
                            </Stack>

                            <Stack spacing={0.6}>
                                {reasoningSteps.slice(0, visibleSteps).map((step) => (
                                    <Stack
                                        key={step}
                                        direction="row"
                                        spacing={1.2}
                                        alignItems="flex-start"
                                        sx={{ animation: `${stepIn} 0.3s ease both` }}
                                    >
                                        <Box
                                            sx={{
                                                width: 5,
                                                height: 5,
                                                borderRadius: "50%",
                                                bgcolor: "#2563EB",
                                                mt: "8px",
                                                flexShrink: 0,
                                            }}
                                        />
                                        <Typography fontSize={13} color="#64748B">
                                            {step}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Paper>
                    </Box>
                </Stack>
            )}
        </Stack>
    );
}