import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Tost from "./components/Tost.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import DataProvider from "./contexts/DataProvider.jsx";
import "./index.css";
import routes from "./routes/PubliceRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={routes} />
        <Tost />
      </DataProvider>
    </AuthProvider>
  </StrictMode>
);
