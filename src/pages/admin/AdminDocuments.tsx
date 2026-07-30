
import { Box, Typography } from "@mui/material";
import DocumentTable from "../../components/admin/DocumentTable";

export default function DocumentLibrary() {
    return (
        <Box>
            <Typography
                variant="h5"
                fontWeight={700}
                mb={3}
            >
                Knowledge Base
            </Typography>

            <DocumentTable />
        </Box>
    );
}