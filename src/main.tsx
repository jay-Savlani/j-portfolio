import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MediaQueryProvider } from "./contexts/MediaQueryProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MediaQueryProvider>
      <App />
    </MediaQueryProvider>
  </React.StrictMode>
);
