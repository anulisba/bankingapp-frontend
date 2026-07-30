import { useRef, useState } from "react";

import {
    Box,
    Button,
    Chip,
    LinearProgress,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import {
    CloudUploadRounded,
    InsertDriveFileRounded,
} from "@mui/icons-material";

export default function UploadZone() {
    const inputRef = useRef<HTMLInputElement>(null);

    const [file, setFile] = useState<File | null>(null);

    const handleBrowse = () => {
        inputRef.current?.click();
    };

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const selected = event.target.files?.[0];

        if (selected) {
            setFile(selected);
        }
    };

    return (
        <Paper
            elevation={0}
            sx={{
                p: 4,
                borderRadius: "22px",
                border: "1px solid #E5E7EB",
                minHeight: 470,

                display: "flex",
                flexDirection: "column",
            }}
        >
            <Typography
                fontWeight={700}
                fontSize={20}
                mb={3}
            >
                Upload Documents
            </Typography>

            <Box
                sx={{
                    flex: 1,

                    border: "2px dashed #CBD5E1",
                    borderRadius: "18px",

                    bgcolor: "#F8FAFC",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    transition: ".25s",

                    "&:hover": {
                        borderColor: "#2563EB",
                        bgcolor: "#F4F8FF",
                    },
                }}
            >
                <Stack
                    spacing={2}
                    alignItems="center"
                >
                    <Box
                        sx={{
                            width: 82,
                            height: 82,
                            borderRadius: "50%",
                            bgcolor: "#EEF4FF",

                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <CloudUploadRounded
                            sx={{
                                fontSize: 42,
                                color: "#2563EB",
                            }}
                        />
                    </Box>

                    <Typography
                        fontWeight={700}
                        fontSize={20}
                    >
                        Drag & Drop Documents
                    </Typography>

                    <Typography
                        color="text.secondary"
                        textAlign="center"
                    >
                        Upload knowledge documents for the AI assistant.
                    </Typography>

                    <Stack
                        direction="row"
                        spacing={1}
                    >
                        <Chip label="PDF" />

                        <Chip label="DOCX" />

                        <Chip label="TXT" />
                    </Stack>

                    <Button
                        variant="contained"
                        onClick={handleBrowse}
                        sx={{
                            mt: 2,
                            px: 4,
                            borderRadius: "12px",
                        }}
                    >
                        Browse Files
                    </Button>

                    <input
                        ref={inputRef}
                        hidden
                        type="file"
                        accept=".pdf,.doc,.docx,.txt"
                        onChange={handleChange}
                    />
                </Stack>
            </Box>

            {file && (
                <Paper
                    elevation={0}
                    sx={{
                        mt: 3,
                        p: 2,

                        border: "1px solid #E5E7EB",

                        borderRadius: "14px",
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                    >
                        <InsertDriveFileRounded
                            color="primary"
                        />

                        <Box flex={1}>
                            <Typography
                                fontWeight={600}
                            >
                                {file.name}
                            </Typography>

                            <Typography
                                color="text.secondary"
                                fontSize={13}
                            >
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                            </Typography>

                            <LinearProgress
                                value={100}
                                variant="determinate"
                                sx={{
                                    mt: 1,
                                    borderRadius: 5,
                                }}
                            />
                        </Box>
                    </Stack>
                </Paper>
            )}
        </Paper>
    );
}