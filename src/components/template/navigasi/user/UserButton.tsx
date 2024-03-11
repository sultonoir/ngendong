import Image from "next/image";
import React from "react";
import { HiMenu } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex h-12 cursor-pointer items-center justify-between gap-2 rounded-full border p-2 pl-3 shadow-none hover:bg-transparent hover:shadow-md lg:w-[85px]">
          <HiMenu size={20} />
          <Image
            alt="placeholder"
            src="/placeholder.jpg"
            width={35}
            height={35}
            loading="eager"
            className="rounded-full border"
            priority
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuItem className="font-semibold">Masuk</DropdownMenuItem>
        <DropdownMenuItem>Daftar</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Jadikan tempat Ngendong</DropdownMenuItem>
        <DropdownMenuItem>Pusat bantuan</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
