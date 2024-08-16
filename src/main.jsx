import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import DataProvider from "./contexts/DataProvider.jsx";
import "./index.css";
import routes from "./routes/PubliceRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={routes} />
    </DataProvider>
  </StrictMode>
);
