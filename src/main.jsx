import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Service worker registration happens after the app has already mounted, and
// is wrapped defensively: some sandboxed preview environments (e.g. embedded
// iframes) restrict service workers, and that must never white-screen the app.
if ("serviceWorker" in navigator) {
  import("virtual:pwa-register")
    .then(({ registerSW }) => {
      try {
        registerSW({ immediate: true });
      } catch (err) {
        console.warn("Service worker registration skipped:", err);
      }
    })
    .catch((err) => console.warn("PWA register module unavailable:", err));
}
