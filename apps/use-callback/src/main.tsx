import { UIProvider } from "@monorepo/ui";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <UIProvider>
      <main className="dark text-foreground bg-background">
        <App />
      </main>
    </UIProvider>
  </StrictMode>
);
