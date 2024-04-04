import MainNavbar from "@/components/template/navbar/MainNavbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <MainNavbar />
      {children}
    </React.Fragment>
  );
};

export default Layout;
