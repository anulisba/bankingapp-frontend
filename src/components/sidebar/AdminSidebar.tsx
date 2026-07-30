import {
    Avatar,
    Box,
    Button,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";

import {
    DashboardRounded,
    DescriptionRounded,
    CloudUploadRounded,
    LogoutRounded,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const menuItems = [
    {
        title: "Dashboard",
        path: "/admin",
        icon: <DashboardRounded />,
    },
    {
        title: "Knowledge Base",
        path: "/admin/documents",
        icon: <DescriptionRounded />,
    },
    {
        title: "Knowledge Upload",
        path: "/admin/upload",
        icon: <CloudUploadRounded />,
    },
];

export default function AdminSidebar() {
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

            <Stack direction="row" spacing={2} alignItems="center" mb={5}>
                <Avatar
                    sx={{
                        bgcolor: "#2563EB",
                        width: 42,
                        height: 42,
                        borderRadius: "12px",
                    }}
                >
                    🏦
                </Avatar>

                <Box>
                    <Typography
                        fontWeight={700}
                        fontSize={16}
                    >
                        Banking Admin
                    </Typography>

                    <Typography
                        fontSize={12}
                        color="text.secondary"
                    >
                        Knowledge Management
                    </Typography>
                </Box>
            </Stack>

            {/* Navigation */}

            <Typography
                fontSize={11}
                fontWeight={700}
                color="text.secondary"
                letterSpacing={1}
                mb={1}
            >
                NAVIGATION
            </Typography>

            <List disablePadding>
                {menuItems.map((item) => (
                    <ListItemButton
                        key={item.title}
                        component={NavLink}
                        to={item.path}
                        end={item.path === "/admin"}
                        sx={{
                            mb: 1,
                            py: 1.3,
                            borderRadius: "14px",
                            color: "#64748B",
                            textDecoration: "none",

                            "&.active": {
                                bgcolor: "#EEF4FF",
                                borderLeft: "3px solid #2563EB",
                                color: "#2563EB",

                                "& .MuiListItemIcon-root": {
                                    color: "#2563EB",
                                },

                                "& .MuiTypography-root": {
                                    fontWeight: 600,
                                },
                            },

                            "&:hover": {
                                bgcolor: "#F7F9FC",
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 40,
                                color: "inherit",
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>

                        <ListItemText
                            primary={item.title}
                            primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: 500,
                            }}
                        />
                    </ListItemButton>
                ))}
            </List>

            <Box flex={1} />

            {/* Bottom */}

            <Divider sx={{ mb: 2 }} />

            <Button
                startIcon={<LogoutRounded />}
                sx={{
                    justifyContent: "flex-start",
                    color: "#EF4444",
                    borderRadius: "12px",
                    textTransform: "none",
                    fontWeight: 600,
                }}
            >
                Logout
            </Button>

            <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                mt={3}
            >
                <Avatar
                    sx={{
                        bgcolor: "#2563EB",
                        width: 38,
                        height: 38,
                        fontSize: 14,
                    }}
                >
                    A
                </Avatar>

                <Box>
                    <Typography
                        fontWeight={600}
                        fontSize={14}
                    >
                        Admin
                    </Typography>

                    <Typography
                        fontSize={12}
                        color="text.secondary"
                    >
                        System Administrator
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
}