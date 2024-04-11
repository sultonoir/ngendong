import { Toaster } from "@/components/providers/Toaster";
import MainNavbar from "@/components/template/navbar/MainNavbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <MainNavbar />
      {children}
      <Toaster richColors position="top-center" />
    </React.Fragment>
  );
};

export default Layout;
