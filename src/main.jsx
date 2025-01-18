import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./Style/Style.css";
import { LangProvider } from "./context/LanguageContext";

createRoot(document.getElementById("root")).render(
  <LangProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </LangProvider>
);
