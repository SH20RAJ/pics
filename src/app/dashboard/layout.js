import { auth } from "@/auth";
import { DashboardLayout } from "@/components/dashboard";
import { SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default async function layout({ children }) {
  const session = await auth()
  if (!session) return redirect("/join")

  return (
    <>
    <SessionProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </SessionProvider>
    </>
  );
}
