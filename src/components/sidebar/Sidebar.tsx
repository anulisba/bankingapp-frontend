import {
    Avatar,
    Box,
    Button,
    Divider,
    List,
    ListItemButton,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";

import {
    AddRounded,
    LogoutRounded,
    ChatBubbleOutlineRounded,
    ExpandMoreRounded,
} from "@mui/icons-material";

import { motion } from "framer-motion";

const todayChats = [
    { title: "Check Balance", time: "9:55 PM" },
    { title: "Transfer Money", time: "9:21 PM" },
    { title: "Account Details", time: "8:15 PM" },
];

const yesterdayChats = [
    { title: "Loan Eligibility", time: "7:45 PM" },
    { title: "Transaction History", time: "6:30 PM" },
];

export default function Sidebar() {
    return (
        <Box
            component={motion.div}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            sx={{
                width: 280,
                flexShrink: 0,
                bgcolor: "#FFFFFF",
                borderRight: "1px solid #EEF0F5",
                display: "flex",
                flexDirection: "column",
                p: 3,
            }}
        >
            {/* Logo */}
            <Stack direction="row" spacing={2} alignItems="center" mb={4}>
                <Avatar
                    sx={{
                        bgcolor: "primary.main",
                        width: 40,
                        height: 40,
                        borderRadius: "12px",
                    }}
                >
                    🏦
                </Avatar>

                <Box>
                    <Typography fontWeight={700} fontSize={16} lineHeight={1.2}>
                        Banking Agent
                    </Typography>
                    <Typography fontSize={12} color="text.secondary">
                        Enterprise AI
                    </Typography>
                </Box>
            </Stack>

            {/* New Chat */}
            <Button
                fullWidth
                startIcon={<AddRounded />}
                variant="contained"
                sx={{
                    height: 44,
                    borderRadius: "12px",
                    mb: 4,
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "0 10px 24px rgba(37,99,235,.18)",
                    },
                }}
            >
                New Chat
            </Button>

            {/* Conversation List */}
            <Box sx={{ flex: 1, overflowY: "auto" }}>
                <Typography
                    fontSize={11}
                    fontWeight={600}
                    letterSpacing={0.5}
                    color="text.secondary"
                    mb={1}
                >
                    TODAY
                </Typography>

                <List disablePadding>
                    {todayChats.map((chat, index) => (
                        <ListItemButton
                            key={chat.title}
                            sx={{
                                borderRadius: "12px",
                                mb: 0.5,
                                py: 1,
                                bgcolor: index === 0 ? "#EEF4FF" : "transparent",
                                borderLeft: index === 0 ? "3px solid #2563EB" : "3px solid transparent",
                                "&:hover": { bgcolor: "#F5F7FB" },
                            }}
                        >
                            <ChatBubbleOutlineRounded
                                sx={{
                                    mr: 1.5,
                                    fontSize: 18,
                                    color: index === 0 ? "primary.main" : "#64748B",
                                }}
                            />
                            <ListItemText
                                primary={chat.title}
                                primaryTypographyProps={{
                                    fontSize: 14,
                                    fontWeight: index === 0 ? 600 : 500,
                                    color: index === 0 ? "#0F172A" : "#334155",
                                }}
                            />
                            <Typography fontSize={11} color="text.secondary" sx={{ ml: 1 }}>
                                {chat.time}
                            </Typography>
                        </ListItemButton>
                    ))}
                </List>

                <Typography
                    fontSize={11}
                    fontWeight={600}
                    letterSpacing={0.5}
                    color="text.secondary"
                    mt={4}
                    mb={1}
                >
                    YESTERDAY
                </Typography>

                <List disablePadding>
                    {yesterdayChats.map((chat) => (
                        <ListItemButton
                            key={chat.title}
                            sx={{
                                borderRadius: "12px",
                                mb: 0.5,
                                py: 1,
                                "&:hover": { bgcolor: "#F5F7FB" },
                            }}
                        >
                            <ChatBubbleOutlineRounded
                                sx={{ mr: 1.5, fontSize: 18, color: "#64748B" }}
                            />
                            <ListItemText
                                primary={chat.title}
                                primaryTypographyProps={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "#334155",
                                }}
                            />
                            <Typography fontSize={11} color="text.secondary" sx={{ ml: 1 }}>
                                {chat.time}
                            </Typography>
                        </ListItemButton>
                    ))}
                </List>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Bottom */}
            <Stack spacing={0.5}>
                <Button
                    startIcon={<LogoutRounded />}
                    sx={{
                        justifyContent: "flex-start",
                        color: "#EF4444",
                        borderRadius: "12px",
                        textTransform: "none",
                        fontWeight: 500,
                    }}
                >
                    Logout
                </Button>

                {/* <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    mt={1}
                    sx={{
                        p: 1,
                        borderRadius: "14px",
                        cursor: "pointer",
                        "&:hover": { bgcolor: "#F8FAFC" },
                    }}
                >
                    <Avatar sx={{ bgcolor: "#2563EB", width: 36, height: 36, fontSize: 14 }}>
                        A
                    </Avatar>

                    <Box flex={1}>
                        <Typography fontSize={14} fontWeight={600}>
                            Anu Lisba
                        </Typography>
                        <Typography fontSize={12} color="text.secondary">
                            Customer
                        </Typography>
                    </Box>

                    <ExpandMoreRounded sx={{ color: "#94A3B8", fontSize: 20 }} />
                </Stack> */}
            </Stack>
        </Box>
    );
}