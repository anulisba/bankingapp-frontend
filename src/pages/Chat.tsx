import { Box } from "@mui/material";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";

export default function Chat() {
    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    overflow: "auto",
                    px: 5,
                    py: 4,
                }}
            >
                <ChatWindow />
            </Box>

            <Box
                sx={{
                    px: 4,
                    pt: 2,
                    pb: 0.5,
                    bgcolor: "#FFFFFF",
                    borderTop: "1px solid #F1F3F8",
                }}
            >
                <ChatInput />
            </Box>
        </Box>
    );
}