import { Snackbar, Alert } from "@mui/material";

interface Props {
    open: boolean;
    message: string;
    onClose: () => void;
}

export default function NotificationPopup({
    open,
    message,
    onClose,
}: Props) {

    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={onClose}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >
            <Alert
                severity="warning"
                variant="filled"
                onClose={onClose}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}