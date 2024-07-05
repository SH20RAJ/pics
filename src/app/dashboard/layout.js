import { DashboardLayout } from "@/components/dashboard";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function layout({ children }) {
  return (
    <>
    <SessionProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </SessionProvider>
    </>
  );
}
