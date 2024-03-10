import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-background/50 backdrop-blur-sm">
      <div className="flex items-center justify-center px-4 py-2">
        <Link href="/">Home</Link>
        <Link href="/room">Room</Link>
      </div>
    </div>
  );
};

export default Navbar;
