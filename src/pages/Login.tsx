import { useState } from "react";
import {
    Box,
    Button,
    Chip,
    Paper,
    Stack,
    TextField,
    Typography,
    InputAdornment,
    IconButton,
} from "@mui/material";
import {
    AccountBalanceRounded,
    LockOutlined,
    ArrowForwardRounded,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#F6F8FB",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 4,
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                }}
            >
                {/* Left */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        px: 12,
                    }}
                >
                    <Chip
                        label="Enterprise AI Platform"
                        sx={{
                            width: "fit-content",
                            mb: 4,
                            bgcolor: "#EEF4FF",
                            color: "#2563EB",
                            fontWeight: 600,
                            borderRadius: "10px",
                        }}
                    />

                    <Typography
                        sx={{
                            fontSize: 56,
                            fontWeight: 800,
                            lineHeight: 1.05,
                            color: "#0F172A",
                            letterSpacing: "-2px",
                        }}
                    >
                        Banking
                        <br />
                        Agent
                    </Typography>

                    <Typography
                        sx={{
                            mt: 3,
                            maxWidth: 430,
                            color: "#64748B",
                            fontSize: 18,
                            lineHeight: 1.8,
                        }}
                    >
                        Intelligent banking assistant for secure conversations,
                        document analysis, approvals, and enterprise automation.
                    </Typography>

                    <Stack direction="row" spacing={2} mt={5}>
                        <Chip label="Secure" />
                        <Chip label="AI Powered" />
                        <Chip label="Enterprise" />
                    </Stack>
                </Box>

                {/* Right */}
                <Box
                    sx={{
                        width: 560,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        px: 6,
                    }}
                >
                    <Paper
                        component={motion.div}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        elevation={0}
                        sx={{
                            width: "100%",
                            p: 5,
                            borderRadius: "28px",
                            bgcolor: "#fff",
                            border: "1px solid #EAECEF",
                            boxShadow: "0 24px 60px rgba(15,23,42,.08)",
                        }}
                    >
                        <AccountBalanceRounded
                            sx={{
                                fontSize: 38,
                                color: "#2563EB",
                                mb: 2,
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: 30,
                                fontWeight: 700,
                                color: "#0F172A",
                            }}
                        >
                            Welcome back
                        </Typography>

                        <Typography
                            sx={{
                                color: "#64748B",
                                mt: 1,
                                mb: 5,
                            }}
                        >
                            Sign in to continue to your workspace.
                        </Typography>

                        <Stack spacing={3}>
                            <TextField
                                fullWidth
                                placeholder="User ID"
                                variant="filled"
                                slotProps={{
                                    input: {
                                        disableUnderline: true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                                sx={{
                                    "& .MuiFilledInput-root": {
                                        bgcolor: "#F8FAFC",
                                        borderRadius: "16px",
                                        height: 58,
                                    },
                                }}
                            />

                            <TextField
                                fullWidth
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                variant="filled"
                                slotProps={{
                                    input: {
                                        disableUnderline: true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockOutlined />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() =>
                                                        setShowPassword(!showPassword)
                                                    }
                                                >
                                                    {showPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }
                                }}
                                sx={{
                                    "& .MuiFilledInput-root": {
                                        bgcolor: "#F8FAFC",
                                        borderRadius: "16px",
                                        height: 58,
                                    },
                                }}
                            />

                            <Button
                                variant="contained"
                                endIcon={<ArrowForwardRounded />}
                                sx={{
                                    height: 56,
                                    borderRadius: "16px",
                                    fontSize: 16,
                                    fontWeight: 600,
                                    mt: 2,
                                    boxShadow: "none",

                                    "&:hover": {
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 14px 30px rgba(37,99,235,.25)",
                                    },

                                    transition: ".25s",
                                }}
                            >
                                Sign In
                            </Button>
                        </Stack>

                        <Typography
                            sx={{
                                mt: 5,
                                fontSize: 13,
                                color: "#94A3B8",
                                textAlign: "center",
                            }}
                        >
                            Demo Accounts
                            <br />
                            admin1 / admin123
                            <br />
                            cust1 / cust123
                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}