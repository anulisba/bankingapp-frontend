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

const listVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.04 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -6 },
    show: { opacity: 1, x: 0 },
};

function ChatGroup({ label, chats, activeIndex = -1 }) {
    return (
        <Box mb={3}>
            <Typography
                fontSize={11}
                fontWeight={600}
                letterSpacing={0.6}
                color="#94A3B8"
                mb={0.75}
                sx={{ textTransform: "uppercase" }}
            >
                {label}
            </Typography>

            <List
                disablePadding
                component={motion.ul}
                variants={listVariants}
                initial="hidden"
                animate="show"
            >
                {chats.map((chat, index) => {
                    const active = index === activeIndex;
                    return (
                        <ListItemButton
                            key={chat.title}
                            component={motion.li}
                            variants={itemVariants}
                            disableGutters
                            sx={{
                                borderRadius: "10px",
                                mb: 0.25,
                                px: 1.25,
                                py: 0.9,
                                transition: "background-color 0.15s ease",
                                bgcolor: active ? "#F1F5FE" : "transparent",
                                "&:hover": { bgcolor: active ? "#F1F5FE" : "#F8FAFC" },
                            }}
                        >
                            <ChatBubbleOutlineRounded
                                sx={{
                                    mr: 1.4,
                                    fontSize: 16,
                                    color: active ? "#2563EB" : "#94A3B8",
                                }}
                            />
                            <ListItemText
                                primary={chat.title}
                                primaryTypographyProps={{
                                    fontSize: 13.5,
                                    fontWeight: active ? 600 : 500,
                                    color: active ? "#0F172A" : "#475569",
                                    noWrap: true,
                                }}
                            />
                            <Typography fontSize={11} color="#B0B8C4" sx={{ ml: 1, flexShrink: 0 }}>
                                {chat.time}
                            </Typography>
                        </ListItemButton>
                    );
                })}
            </List>
        </Box>
    );
}

export default function Sidebar() {
    return (
        <Box
            component={motion.div}
            initial={{ x: -24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            sx={{
                width: 268,
                flexShrink: 0,
                bgcolor: "#FFFFFF",
                borderRight: "1px solid #F1F3F7",
                display: "flex",
                flexDirection: "column",
                p: 2.5,
            }}
        >
            {/* Logo */}
            <Stack direction="row" spacing={1.5} alignItems="center" mb={3.5} pl={0.5}>
                <Box
                    sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "9px",
                        bgcolor: "#EEF4FF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 16,
                    }}
                >
                    🏦
                </Box>

                <Box>
                    <Typography fontWeight={600} fontSize={14.5} lineHeight={1.2} color="#0F172A">
                        Banking Agent
                    </Typography>
                    <Typography fontSize={11.5} color="#94A3B8">
                        Enterprise AI
                    </Typography>
                </Box>
            </Stack>

            {/* New Chat */}
            <Button
                fullWidth
                startIcon={<AddRounded sx={{ fontSize: 18 }} />}
                disableElevation
                sx={{
                    height: 40,
                    borderRadius: "10px",
                    mb: 3.5,
                    fontWeight: 600,
                    fontSize: 13.5,
                    textTransform: "none",
                    color: "#2563EB",
                    bgcolor: "#F1F5FE",
                    transition: "background-color 0.15s ease",
                    "&:hover": {
                        bgcolor: "#E4ECFD",
                        boxShadow: "none",
                    },
                }}
            >
                New Chat
            </Button>

            {/* Conversation List */}
            <Box sx={{ flex: 1, overflowY: "auto", mr: -1, pr: 1 }}>
                <ChatGroup label="Today" chats={todayChats} activeIndex={0} />
                <ChatGroup label="Yesterday" chats={yesterdayChats} />
            </Box>

            <Divider sx={{ my: 1.5, borderColor: "#F1F3F7" }} />

            {/* Bottom */}
            <Button
                startIcon={<LogoutRounded sx={{ fontSize: 17 }} />}
                sx={{
                    justifyContent: "flex-start",
                    color: "#94A3B8",
                    borderRadius: "10px",
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: 13.5,
                    px: 1.25,
                    transition: "color 0.15s ease, background-color 0.15s ease",
                    "&:hover": {
                        color: "#EF4444",
                        bgcolor: "#FEF2F2",
                    },
                }}
            >
                Logout
            </Button>
        </Box>
    );
}