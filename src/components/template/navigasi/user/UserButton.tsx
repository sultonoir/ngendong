"use client";
import Image from "next/image";
import React from "react";
import { HiMenu } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { type Session } from "next-auth";
import { NavMenu } from "@/dummy";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  session: Session;
}

const UserButton = ({ session }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex h-12 cursor-pointer items-center justify-between gap-2 rounded-full border p-2 pl-3 shadow-none hover:bg-transparent hover:shadow-md lg:w-[85px]">
          <HiMenu size={20} />
          <Image
            alt="placeholder"
            src={session?.user.image ?? "/placeholder.jpg"}
            width={35}
            height={35}
            loading="eager"
            className="rounded-full border object-cover"
            priority
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuLabel className="inline-flex space-x-2">
          <Avatar>
            <AvatarImage src={session?.user.image ?? ""} alt="@shadcn" />
            <AvatarFallback>
              {session?.user.email?.slice(0, 1).toLocaleUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="inline-flex flex-col items-start">
            <span className="text-small text-inherit">
              <p className="font-semibold capitalize">{session?.user.name}</p>
            </span>
            <span className="text-tiny text-muted-foreground">
              <p className="max-w-[150px] truncate">{session?.user.email}</p>
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {NavMenu.map((item) => (
          <DropdownMenuItem
            key={item.title}
            title={item.title}
            className="relative h-fit cursor-pointer"
          >
            <a
              href={item.path}
              className="flex h-full w-full items-center gap-2"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-md bg-primary/20 p-1">
                <item.icon size={24} className="text-primary" />
              </span>
              {item.title}
            </a>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          asChild
          className="cursor-pointer text-white focus:bg-primary focus:hover:text-white focus:hover:opacity-80"
        >
          <Button onClick={() => signOut()} className="w-full">
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
