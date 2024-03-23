import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Route";
import AuthProvider from "./AuthProvider/AuthProvider";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={QueryClient}> */}
    {/* <QueryClientProvider client={QueryClient}> */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>t
    {/* </QueryClientProvider> */}
    {/* </QueryClientProvider> */}
  </React.StrictMode>
);
