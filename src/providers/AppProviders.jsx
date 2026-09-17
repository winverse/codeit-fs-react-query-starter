"use client";

import { ToastContainer } from "react-toastify";
import { LoginProvider } from "@/contexts/LoginContext";

const TOAST_AUTO_CLOSE_MS = 2_000;

function AppProviders({ children }) {
  return (
    <LoginProvider>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={TOAST_AUTO_CLOSE_MS}
        hideProgressBar={true}
      />
    </LoginProvider>
  );
}

export default AppProviders;
