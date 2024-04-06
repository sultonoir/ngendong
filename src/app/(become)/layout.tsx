import { Toaster } from "@/components/providers/Toaster";
import SaveLodging from "@/components/template/host/SaveLodging";
import Logo from "@/components/template/navbar/Logo";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role === "guest") {
    redirect("/");
  }
  return (
    <React.Fragment>
      <nav className="sticky top-0 flex items-center justify-between border border-default/50 bg-background px-10 py-2">
        <Logo />
        <SaveLodging />
      </nav>
      {children}
      <Toaster />
    </React.Fragment>
  );
};

export default Layout;
