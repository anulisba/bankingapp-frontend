import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
import theme from "./theme/theme";
import { NotificationProvider } from "./context/NotificationContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NotificationProvider>
        <CssBaseline />
        <App />
      </NotificationProvider>
    </ThemeProvider>
  </React.StrictMode>
);