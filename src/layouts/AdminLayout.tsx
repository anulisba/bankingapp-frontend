import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import AdminSidebar from "../components/sidebar/AdminSidebar";
import AppHeader from "../components/common/AppHeader";

export default function AdminLayout() {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                bgcolor: "#F7F8FC",
            }}
        >
            <AdminSidebar />

            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <AppHeader />

                <Box
                    sx={{
                        flex: 1,
                        overflow: "auto",
                        p: 4,
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}