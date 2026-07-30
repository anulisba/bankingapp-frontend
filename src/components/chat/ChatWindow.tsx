import { Box, Chip, IconButton, Paper, Stack, Tooltip, Typography } from "@mui/material";
const reasoningSteps = [
    "Checking account information...",
    "Retrieving customer profile...",
    "Preparing response...",
];
import { useChatStore } from "../../store/chatStore";


export default function ChatWindow() {


    const messages = useChatStore((state) => state.messages);
    const hasMessages = messages.length > 0;
    if (!hasMessages) {
        return (
            <Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ maxWidth: 700, textAlign: "center" }}>


                    <Typography sx={{ fontSize: 42, fontWeight: 700, color: "#0F172A" }}>
                        Good Evening
                    </Typography>

                    <Typography sx={{ mt: 2, color: "#64748B", fontSize: 18 }}>
                        How can I help you today?
                    </Typography>

                    <Stack direction="row" spacing={2} justifyContent="center" mt={6} flexWrap="wrap">
                        <Chip label="Check Balance" clickable sx={{ p: 2.8 }} />
                        <Chip label="Transfer Money" clickable sx={{ p: 2.8 }} />
                        <Chip label="Transaction History" clickable sx={{ p: 2.8 }} />

                    </Stack>
                </Box>
            </Box>
        );
    }

    return (
        <Stack spacing={4}>
            {messages.map((message, index) => {
                const isUser = message.role === "user";

                return (
                    <Stack key={index} spacing={0.5} alignItems={isUser ? "flex-end" : "flex-start"}>
                        <Stack
                            direction="row"
                            spacing={2}
                            justifyContent={isUser ? "flex-end" : "flex-start"}
                            sx={{ width: "100%" }}
                        >


                            <Box sx={{ maxWidth: "65%" }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        px: 3,
                                        py: 2,
                                        borderRadius: 1,
                                        bgcolor: isUser ? "#2563EB" : "#FFFFFF",
                                        color: isUser ? "#FFFFFF" : "#0F172A",
                                        border: isUser ? "none" : "1px solid #E5E7EB",
                                        boxShadow: isUser ? "none" : "0 4px 16px rgba(15,23,42,.05)",
                                    }}
                                >
                                    <Typography sx={{ whiteSpace: "pre-wrap", lineHeight: 1.8, fontSize: 15 }}>
                                        {message.content}
                                    </Typography>

                                    {!isUser && (
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                mt: 3,
                                                p: 2,
                                                bgcolor: "#F8FAFC",
                                                borderLeft: "3px solid #2563EB",
                                            }}
                                        >
                                            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                                                <Typography fontWeight={600} fontSize={14}>
                                                    Agent Reasoning
                                                </Typography>
                                            </Stack>

                                            <Stack spacing={0.6}>
                                                {reasoningSteps.map((step) => (
                                                    <Stack key={step} direction="row" spacing={1.2} alignItems="flex-start">
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
                                    )}
                                </Paper>

                                <Typography fontSize={11} color="text.secondary" sx={{ mt: 0.5, px: 0.5 }}>
                                    {message.time}
                                </Typography>

                                {!isUser && (
                                    <Stack direction="row" spacing={0.5} sx={{ mt: 0.5, px: 0.5 }}>
                                        <Tooltip title="Copy">
                                            <IconButton size="small">
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Good response">
                                            <IconButton size="small">
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Bad response">
                                            <IconButton size="small">
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                )}
                            </Box>
                        </Stack>
                    </Stack>
                );
            })}
        </Stack>
    );
}