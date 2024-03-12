import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchButton from "./search/SearchButton";
import UserButton from "./user/UserButton";
import Categories from "./category/Categories";
import { getServerAuthSession } from "@/server/auth";
import UserDropdown from "./user/UserDropdown";
import { Button } from "@/components/ui/button";
import { LuBell } from "react-icons/lu";

const Navbar = async () => {
  const session = await getServerAuthSession();
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

          {session ? (
            <div className="flex items-center gap-5">
              <Link
                href="/hosting"
                className="inline-flex h-12 items-center rounded-full px-3 hover:bg-accent"
              >
                Switch to hosting
              </Link>
              <Button
                className="size-[48px] rounded-full p-0"
                variant="outline"
              >
                <LuBell size={20} />
              </Button>
              <UserButton session={session} />
            </div>
          ) : (
            <React.Fragment>
              <Link
                href="/host"
                className="inline-flex h-12 items-center rounded-full px-3 hover:bg-accent"
              >
                Make a place to stay
              </Link>
              <UserDropdown />
            </React.Fragment>
          )}
        </nav>
      </div>

      <Categories />
    </header>
  );
};

export default Navbar;
