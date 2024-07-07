import React from "react";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "@/lib/context/auth";
import router from "./routes";

function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
