import { Toaster } from "@/components/providers/Toaster";
import Logo from "@/components/template/navbar/Logo";
import { getServerAuthSession } from "@/server/auth";
import { Button } from "@nextui-org/button";
import { redirect } from "next/navigation";
import React from "react";
import Link from "next/link";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role === "guest") {
    redirect("/");
  }
  return (
    <React.Fragment>
      <nav className="sticky top-0 z-50 flex items-center justify-between border border-default/50 bg-background px-10 py-2">
        <Logo />
        <Button
          as={Link}
          href="/service-center"
          radius="full"
          variant="ghost"
          color="default"
        >
          Questions
        </Button>
      </nav>
      {children}
      <Toaster position="top-right" richColors />
    </React.Fragment>
  );
};

export default Layout;
