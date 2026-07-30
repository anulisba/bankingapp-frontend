import {
    Box,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import {
    DescriptionRounded,
    CloudUploadRounded,
    StorageRounded,
    PendingActionsRounded,
} from "@mui/icons-material";

const cards = [
    {
        title: "Documents",
        value: "124",
        subtitle: "+12 this week",
        color: "#2563EB",
        icon: <DescriptionRounded />,
    },
    {
        title: "Uploads Today",
        value: "18",
        subtitle: "+4 since morning",
        color: "#10B981",
        icon: <CloudUploadRounded />,
    },
    {
        title: "Storage Used",
        value: "2.3 GB",
        subtitle: "Healthy",
        color: "#F59E0B",
        icon: <StorageRounded />,
    },
    {
        title: "Pending Reviews",
        value: "6",
        subtitle: "Requires attention",
        color: "#EF4444",
        icon: <PendingActionsRounded />,
    },
];

export default function DashboardCards() {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 3,
            }}
        >
            {cards.map((card) => (
                <Paper
                    key={card.title}
                    elevation={0}
                    sx={{
                        p: 3,
                        borderRadius: "20px",
                        border: "1px solid #E5E7EB",
                        transition: ".25s",

                        "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: "0 15px 40px rgba(15,23,42,.08)",
                        },
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                color="text.secondary"
                                fontSize={14}
                            >
                                {card.title}
                            </Typography>

                            <Typography
                                mt={1}
                                fontWeight={700}
                                fontSize={32}
                            >
                                {card.value}
                            </Typography>

                            <Typography
                                mt={1}
                                fontSize={13}
                                sx={{
                                    color: card.color,
                                    fontWeight: 600,
                                }}
                            >
                                {card.subtitle}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                width: 58,
                                height: 58,
                                borderRadius: "16px",
                                bgcolor: `${card.color}15`,
                                color: card.color,

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                "& svg": {
                                    fontSize: 30,
                                },
                            }}
                        >
                            {card.icon}
                        </Box>
                    </Stack>
                </Paper>
            ))}
        </Box>
    );
}