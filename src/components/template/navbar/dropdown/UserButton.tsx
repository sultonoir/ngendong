import { Dropdown, DropdownTrigger } from "@nextui-org/dropdown";
import { IoIosMenu } from "react-icons/io";
import React from "react";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import MenuSession from "./MenuSession";
import { type Session } from "next-auth";
import NotifyCount from "../../notify/NotifyCount";

interface userButtonProps {
  session: Session | null;
}

const UserButton = ({ session }: userButtonProps) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="ghost"
          size="lg"
          radius="full"
          className="flex h-12 cursor-pointer items-center justify-between gap-2 overflow-visible rounded-full border p-2 pl-3 shadow-none hover:bg-transparent hover:shadow-md lg:w-[20px]"
        >
          <IoIosMenu size={20} />
          <Avatar
            className="transition-transform"
            size="sm"
            src={session?.user.image ?? "/placeholder.jpg"}
          />
          <NotifyCount />
        </Button>
      </DropdownTrigger>
      <MenuSession/>
    </Dropdown>
  );
};

export default UserButton;
