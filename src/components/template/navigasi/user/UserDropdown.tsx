"use client";
import React from "react";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useDialog from "@/hooks/useDialog";
import Link from "next/link";

const UserDropdown = () => {
  const { onOpen } = useDialog();
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
      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuItem
          className="cursor-pointer font-semibold"
          onClick={() => onOpen(true)}
        >
          Sign-in
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onOpen(true)}
          className="cursor-pointer"
        >
          Sign-up
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/room" className="size-full">
            make a place to stay
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Help center</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
