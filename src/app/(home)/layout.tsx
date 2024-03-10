import Navbar from "@/components/template/navigasi/Navbar";
import React, { type PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

export default layout;
