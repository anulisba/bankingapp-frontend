import { Box, Typography } from "@mui/material";
import UploadZone from "../../components/admin/UploadZone";

export default function UploadDocuments() {
    return (
        <Box>
            <Typography
                variant="h5"
                fontWeight={700}
                mb={3}
            >
                Knowledge Upload
            </Typography>

            <UploadZone />
        </Box>
    );
}