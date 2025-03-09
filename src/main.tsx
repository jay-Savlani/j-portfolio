import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MediaQueryProvider } from "./contexts/MediaQueryProvider.tsx";
import { ThemeProvider } from "./contexts/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MediaQueryProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MediaQueryProvider>
  </React.StrictMode>
);
