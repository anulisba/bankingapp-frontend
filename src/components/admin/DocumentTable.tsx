import {
    Avatar,
    Box,
    Chip,
    IconButton,
    InputBase,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import {
    SearchRounded,
    MoreVertRounded,
    PictureAsPdfRounded,
    DescriptionRounded,
    TextSnippetRounded,
} from "@mui/icons-material";

const documents = [
    {
        id: 1,
        name: "Loan_Policy.pdf",
        type: "PDF",
        size: "2.4 MB",
        uploaded: "Today",
        status: "Indexed",
    },
    {
        id: 2,
        name: "FAQ.docx",
        type: "DOCX",
        size: "680 KB",
        uploaded: "Yesterday",
        status: "Indexed",
    },
    {
        id: 3,
        name: "Savings_Rules.pdf",
        type: "PDF",
        size: "1.2 MB",
        uploaded: "Yesterday",
        status: "Processing",
    },
    {
        id: 4,
        name: "Interest_Rates.txt",
        type: "TXT",
        size: "120 KB",
        uploaded: "2 days ago",
        status: "Failed",
    },
];

const statusColor = {
    Indexed: "success",
    Processing: "warning",
    Failed: "error",
} as const;

function getIcon(type: string) {
    switch (type) {
        case "PDF":
            return <PictureAsPdfRounded />;
        case "DOCX":
            return <DescriptionRounded />;
        default:
            return <TextSnippetRounded />;
    }
}

export default function DocumentTable() {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                borderRadius: "22px",
                border: "1px solid #E5E7EB",
            }}
        >
            {/* Header */}

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
            >
                <Typography
                    fontWeight={700}
                    fontSize={20}
                >
                    Document Library
                </Typography>

                <Paper
                    elevation={0}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        px: 2,
                        width: 260,
                        height: 42,
                        bgcolor: "#F8FAFC",
                        borderRadius: "12px",
                    }}
                >
                    <SearchRounded
                        sx={{
                            color: "#94A3B8",
                            mr: 1,
                        }}
                    />

                    <InputBase
                        placeholder="Search documents..."
                        sx={{
                            flex: 1,
                        }}
                    />
                </Paper>
            </Stack>

            {/* Header Row */}

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "2fr .8fr .8fr .8fr .9fr 60px",
                    px: 2,
                    py: 1.5,
                    bgcolor: "#F8FAFC",
                    borderRadius: "12px",
                    mb: 1,
                }}
            >
                <Typography fontWeight={600}>Document</Typography>
                <Typography fontWeight={600}>Type</Typography>
                <Typography fontWeight={600}>Size</Typography>
                <Typography fontWeight={600}>Uploaded</Typography>
                <Typography fontWeight={600}>Status</Typography>
                <Typography />
            </Box>

            {/* Rows */}

            <Stack spacing={1}>
                {documents.map((doc) => (
                    <Paper
                        key={doc.id}
                        elevation={0}
                        sx={{
                            p: 2,
                            borderRadius: "14px",
                            border: "1px solid #EEF2F7",

                            transition: ".2s",

                            "&:hover": {
                                bgcolor: "#FAFBFC",
                                borderColor: "#DCE5F2",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns:
                                    "2fr .8fr .8fr .8fr .9fr 60px",
                                alignItems: "center",
                            }}
                        >
                            {/* File */}

                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                            >
                                <Avatar
                                    sx={{
                                        bgcolor: "#EEF4FF",
                                        color: "#2563EB",
                                        width: 42,
                                        height: 42,
                                    }}
                                >
                                    {getIcon(doc.type)}
                                </Avatar>

                                <Box>
                                    <Typography fontWeight={600}>
                                        {doc.name}
                                    </Typography>

                                    <Typography
                                        fontSize={13}
                                        color="text.secondary"
                                    >
                                        Banking Knowledge Base
                                    </Typography>
                                </Box>
                            </Stack>

                            <Typography>{doc.type}</Typography>

                            <Typography>{doc.size}</Typography>

                            <Typography>{doc.uploaded}</Typography>

                            <Chip
                                size="small"
                                label={doc.status}
                                color={statusColor[doc.status]}
                                sx={{
                                    width: 100,
                                }}
                            />

                            <IconButton>
                                <MoreVertRounded />
                            </IconButton>
                        </Box>
                    </Paper>
                ))}
            </Stack>
        </Paper>
    );
}