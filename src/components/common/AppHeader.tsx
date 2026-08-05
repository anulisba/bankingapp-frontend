import {
    Avatar,
    Box,
    Chip,
    IconButton,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";

import {
    NotificationsNoneRounded,
    DarkModeRounded,
    ExpandMoreRounded,
} from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import NotificationPopup from "../common/NotificationPopup";
import { useNotifications } from "../../context/NotificationContext";


import { useEffect, useState } from "react";
import NotificationDrawer from "./NotificationDrawer";

export default function AppHeader() {


    const { notifications } = useNotifications();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const latestNotification = notifications[0];

    const popupMessage = latestNotification
        ? `${latestNotification.severity} Alert • ${latestNotification.hazard_summary} in ${latestNotification.city}`
        : "";

    useEffect(() => {
        if (notifications.length > 0) {
            setPopupOpen(true);
        }
    }, [notifications.length]);
    return (
        <Box
            sx={{
                height: 72,
                px: 4,
                borderBottom: "1px solid #ECEFF4",
                bgcolor: "#FFFFFF",

                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            {/* Left */}

            <Box>
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: 20,
                        color: "#0F172A",
                    }}
                >
                    Banking Agent
                </Typography>

                <Typography
                    sx={{
                        fontSize: 13,
                        color: "#64748B",
                    }}
                >
                    AI-powered Banking Assistant
                </Typography>
            </Box>

            {/* Right */}

            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
            >
                {/* Status */}

                <Chip
                    label="Connected"
                    color="success"
                    size="small"
                    sx={{
                        borderRadius: 3,
                        fontWeight: 600,
                    }}
                />

                {/* Notification */}

                <Tooltip title="Notifications">
                    <IconButton
                        onClick={() => setDrawerOpen(true)}
                        sx={{
                            bgcolor: "#F8FAFC",

                            "&:hover": {
                                bgcolor: "#EEF2FF",
                            },
                        }}
                    >
                        <Badge
                            badgeContent={notifications.length}
                            color="error"
                        >
                            <NotificationsNoneRounded />
                        </Badge>
                    </IconButton>
                </Tooltip>

                {/* Theme */}

                <Tooltip title="Theme">
                    <IconButton
                        sx={{
                            bgcolor: "#F8FAFC",

                            "&:hover": {
                                bgcolor: "#EEF2FF",
                            },
                        }}
                    >
                        <DarkModeRounded />
                    </IconButton>
                </Tooltip>

                {/* User */}

                <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    sx={{
                        pl: 2,
                        borderLeft: "1px solid #E5E7EB",
                        cursor: "pointer",
                    }}
                >
                    <Avatar
                        sx={{
                            bgcolor: "#2563EB",
                            width: 42,
                            height: 42,
                        }}
                    >
                        A
                    </Avatar>

                    <Box>
                        <Typography
                            fontWeight={600}
                            fontSize={14}
                        >
                            Anu Lisba
                        </Typography>

                        <Typography
                            color="text.secondary"
                            fontSize={12}
                        >
                            Customer
                        </Typography>
                    </Box>

                    <ExpandMoreRounded
                        sx={{
                            color: "#94A3B8",
                        }}
                    />
                </Stack>
            </Stack>
            <NotificationPopup
                open={popupOpen}
                message={popupMessage}
                onClose={() => setPopupOpen(false)}
            />
            <NotificationDrawer
                open={drawerOpen}
                notifications={notifications}
                onClose={() => setDrawerOpen(false)}
            />
        </Box>
    );
}