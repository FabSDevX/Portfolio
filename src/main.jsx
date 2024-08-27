import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Landpage from "./page/Landpage";
import LanguageProvider from "./layout/LanguageProvider";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <Landpage />
    </LanguageProvider>
  </StrictMode>
);
