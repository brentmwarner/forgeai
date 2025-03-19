import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Wireframe } from "./screens/Wireframe";
import { Onboarding } from "./screens/Onboarding";
import { WebsiteDetails } from "./screens/WebsiteDetails";
import { VariableLibrary } from "./screens/VariableLibrary";

// Import Plus Jakarta Sans font
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/prompt" element={<Wireframe />} />
        <Route path="/website-details" element={<WebsiteDetails />} />
        <Route path="/variable-library" element={<VariableLibrary />} />
        <Route path="/" element={<Navigate to="/onboarding" replace />} />
      </Routes>
    </Router>
  </StrictMode>
);