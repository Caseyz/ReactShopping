import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const domContainer = document.getElementById("root");
if (domContainer) {
  createRoot(domContainer).render(<App />);
}
