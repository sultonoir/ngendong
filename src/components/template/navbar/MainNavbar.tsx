import { getServerAuthSession } from "@/server/auth";
import React from "react";
import Logo from "./Logo";
import UserButton from "./dropdown/UserButton";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import Categories from "./category/Categories";
import Header from "./header";

const MainNavbar = async () => {
  const session = await getServerAuthSession();
  return (
    <Header>
      <div className="border-b border-default/50">
        <div className="container flex items-center justify-between py-2">
          <Logo />
          <div className="flex items-center gap-2">
            <Button
              as={Link}
              href={session?.user.role === "admin" ? "/owner" : "host"}
              radius="full"
              variant="light"
              color="default"
            >
              Switch to owner
            </Button>
            <UserButton session={session} />
          </div>
        </div>
      </div>
      <Categories />
    </Header>
  );
};

export default MainNavbar;