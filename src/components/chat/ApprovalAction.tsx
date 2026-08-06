import {
    Box,
    Button,
} from "@mui/material";

import { useChatStore } from "../../store/chatStore";
import { useChat } from "../../context/ChatProvider";

export default function ApprovalActions() {

    const paused = useChatStore(
        (state) => state.isPaused
    );

    const { sendApproval } = useChat();

    if (!paused) {
        return null;
    }

    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                mt: 2,
            }}
        >
            <Button
                variant="contained"
                color="success"
                onClick={() => sendApproval("approve")}
            >
                Approve
            </Button>

            <Button
                variant="outlined"
                color="error"
                onClick={() => sendApproval("reject")}
            >
                Reject
            </Button>
        </Box>
    );
}