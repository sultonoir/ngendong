import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="logo"
        width={40}
        height={40}
        priority
        loading="eager"
        className="size-auto"
      />
    </Link>
  );
};

export default Logo;
