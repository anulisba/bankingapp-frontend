import {
    Box,
    Button,
    Typography,
} from "@mui/material";

import { useChatStore } from "../../store/chatStore";
import { useChat } from "../../context/ChatProvider";

export default function NextBestActions() {

    const nextActions = useChatStore(
        (state) => state.nextActions
    );

    const { sendMessage } = useChat();

    if (nextActions.length === 0) {
        return null;
    }

    return (
        <Box
            sx={{
                mt: 3,
                mb: 2,
            }}
        >
            <Typography
                sx={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#64748B",
                    mb: 1.5,
                }}
            >
                Next Best Actions
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                }}
            >
                {nextActions.map((action, index) => (
                    <Button
                        key={index}
                        variant="outlined"
                        onClick={() => sendMessage(action.label)}
                        sx={{
                            borderRadius: "999px",
                            textTransform: "none",
                            fontWeight: 500,
                            px: 2,
                            py: 0.8,

                            borderColor: "#E2E8F0",
                            color: "#334155",
                            background: "#FFFFFF",

                            "&:hover": {
                                background: "#F8FAFC",
                                borderColor: "#CBD5E1",
                            },
                        }}
                    >
                        {action.label}
                    </Button>
                ))}
            </Box>
        </Box>
    );
}