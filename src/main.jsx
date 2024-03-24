import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Route";


import TranstackProvider from "./providers/TranstackProvider";
import AuthProvider from "./AuthProvider/AuthProvider";
import FunctionProvider from "./providers/FunctionProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <FunctionProvider>
        <TranstackProvider>
       
          <RouterProvider router={router} />
         
        </TranstackProvider>
      </FunctionProvider>
    </AuthProvider>
  </React.StrictMode>
);


