import { Box } from "@mui/material";

import Sidebar from "../components/sidebar/Sidebar";
import AppHeader from "../components/common/AppHeader";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";

export default function ChatLayout() {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                bgcolor: "#FFFFFF",
                p: 1,
            }}
        >
            {/* Sidebar */}
            <Sidebar />

            {/* Main */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    bgcolor: "#FFFFFF",
                }}
            >
                <AppHeader />

                <Box
                    sx={{
                        flex: 1,
                        overflow: "auto",
                        px: 5,
                        py: 4,
                        bgcolor: "#F9FAFC",
                    }}
                >
                    <ChatWindow />
                </Box>

                <Box
                    sx={{
                        px: 4,
                        pt: 2,
                        pb: 3,
                        bgcolor: "#FFFFFF",
                        borderTop: "1px solid #F1F3F8",
                    }}
                >
                    <ChatInput />
                </Box>
            </Box>
        </Box>
    );
}