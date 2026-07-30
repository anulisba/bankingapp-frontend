import { createTheme } from "@mui/material/styles";
import colors from "./colors";

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary,
        },

        background: {
            default: colors.background,
            paper: colors.surface,
        },

        text: {
            primary: colors.text,
            secondary: colors.textSecondary,
        },
    },

    shape: {
        borderRadius: 18,
    },

    typography: {
        fontFamily: "Inter, sans-serif",

        h3: {
            fontWeight: 700,
        },

        h4: {
            fontWeight: 700,
        },

        button: {
            textTransform: "none",
            fontWeight: 600,
        },
    },
});

export default theme;