import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchButton from "./search/SearchButton";
import UserButton from "./user/UserButton";
import Categories from "./category/Categories";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/50 backdrop-blur-sm">
      <div className="border-b">
        <nav className="container flex items-center justify-between px-4 py-2">
          <Link href="/">
            <Image
              alt="logo"
              src="/logo.png"
              width={150}
              height={50}
              priority
              loading="eager"
            />
          </Link>
          <SearchButton />
          <div className="flex items-center gap-5">
            <Link
              href={{
                pathname: "/",
                query: { name: "test" },
              }}
              className="inline-flex h-12 items-center rounded-full px-3 hover:bg-accent "
            >
              Jadikan tempat Ngendong
            </Link>
            <UserButton />
          </div>
        </nav>
      </div>

      <Categories />
    </header>
  );
};

export default Navbar;
