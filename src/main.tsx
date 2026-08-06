import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
import theme from "./theme/theme";
import { NotificationProvider } from "./context/NotificationContext";
import { ChatProvider } from "./context/ChatProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NotificationProvider>
        <ChatProvider>
          <CssBaseline />
          <App />
        </ChatProvider>
      </NotificationProvider>
    </ThemeProvider>
  </React.StrictMode>
);