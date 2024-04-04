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
      <nav className="flex items-center justify-between px-10 py-2">
        <Logo />
      </nav>
      <main className="container h-[calc(100dvh-140px)] max-w-screen-xl">
        {children}
      </main>
    </React.Fragment>
  );
};

export default Layout;
