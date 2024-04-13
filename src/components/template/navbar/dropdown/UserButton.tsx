import { Dropdown, DropdownTrigger } from "@nextui-org/dropdown";
import React from "react";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import MenuSession from "./MenuSession";
import { type Session } from "next-auth";

interface userButtonProps {
  session: Session | null;
}

const UserButton = ({ session }: userButtonProps) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="ghost" size="lg" radius="full" isIconOnly>
          <Avatar
            className="transition-transform"
            size="md"
            src={session?.user.image ?? "/placeholder.jpg"}
          />
        </Button>
      </DropdownTrigger>
      <MenuSession />
    </Dropdown>
  );
};

export default UserButton;
