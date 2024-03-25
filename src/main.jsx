import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Route";
import AuthProvider from "./AuthProvider/AuthProvider";
import TranstackProvider from "./providers/TranstackProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TranstackProvider>
        <RouterProvider router={router} />
      </TranstackProvider>
    </AuthProvider>
  </React.StrictMode>
);
