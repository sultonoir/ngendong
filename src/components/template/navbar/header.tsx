import React, { type PropsWithChildren } from "react";

const Header = ({ children }: PropsWithChildren) => {
  return (
    <header className="sticky top-0 z-50 border-b border-default/50 bg-background/80 backdrop-blur-sm">
      {children}
    </header>
  );
};

export default Header;
