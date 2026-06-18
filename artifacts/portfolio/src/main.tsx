// ============================================================================
// APPLICATION ENTRY POINT
// ============================================================================

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// ============================================================================
// MOUNT APPLICATION TO DOM
// ============================================================================

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Root element with id "root" not found in HTML');
}

createRoot(rootElement).render(<App />);
