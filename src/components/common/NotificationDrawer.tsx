import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
    Chip,
} from "@mui/material";

import CloseRounded from "@mui/icons-material/CloseRounded";
import type { AlertNotification } from "../../context/NotificationContext";

interface Props {
    open: boolean;
    notifications: AlertNotification[];
    onClose: () => void;
}

export default function NotificationDrawer({
    open,
    notifications,
    onClose,
}: Props) {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
        >
            <Box
                sx={{
                    width: 380,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        p: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography fontWeight={700}>
                        Notifications
                    </Typography>

                    <IconButton onClick={onClose}>
                        x
                    </IconButton>
                </Box>

                <Divider />

                <List sx={{ flex: 1 }}>

                    {notifications.length === 0 && (
                        <Typography
                            align="center"
                            mt={5}
                            color="text.secondary"
                        >
                            No notifications
                        </Typography>
                    )}

                    {notifications.map((notification, index) => (
                        <ListItem
                            key={index}
                            divider
                            alignItems="flex-start"
                        >
                            <ListItemText
                                primary={
                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                    >
                                        <Typography
                                            fontWeight={600}
                                        >
                                            {notification.hazard_summary}
                                        </Typography>

                                        <Chip
                                            label={notification.severity}
                                            color={
                                                notification.severity === "HIGH"
                                                    ? "error"
                                                    : notification.severity === "MEDIUM"
                                                        ? "warning"
                                                        : "success"
                                            }
                                            size="small"
                                        />
                                    </Box>
                                }

                                secondary={
                                    <>
                                        <Typography
                                            variant="body2"
                                        >
                                            📍 {notification.city}
                                        </Typography>
                                    </>
                                }
                            />
                        </ListItem>
                    ))}

                </List>
            </Box>
        </Drawer>
    );
}