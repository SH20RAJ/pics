import { DashboardLayout } from "@/components/dashboard";
import React from "react";

export default function layout({ children }) {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
}
