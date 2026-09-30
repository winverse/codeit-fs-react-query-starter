"use client";

import { ToastContainer } from "react-toastify";
import { TOAST_AUTO_CLOSE_MS } from "@/constants/time";
import { LoginProvider } from "@/contexts/LoginContext";

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
