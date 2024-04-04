"use client";
import {
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  Switch,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";
import React from "react";
import { LuLogOut } from "react-icons/lu";
import { useTheme } from "next-themes";

const MenuSession = () => {
  const { theme, setTheme } = useTheme();

  const handleCheck = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  const items = [
    {
      key: "message",
      label: "Message",
      path: "/message",
    },
    {
      key: "notifications",
      label: "Notifications",
      path: "/notifications",
    },
    {
      key: "wishlists",
      label: "Wishlists",
      path: "/wishlists",
    },
    {
      key: "trips",
      label: "Trips",
      path: "/Trips",
    },
  ];
  return (
    <DropdownMenu variant="solid" aria-label="Static Actions" className="w-60">
      <DropdownSection showDivider>
        {items.map((item) => (
          <DropdownItem key={item.key} href={item.path}>
            {item.label}
          </DropdownItem>
        ))}
      </DropdownSection>
      <DropdownSection showDivider>
        <DropdownItem href="/host">Make a place to stay</DropdownItem>
        <DropdownItem href="/help-center">Help center</DropdownItem>
      </DropdownSection>
      <DropdownItem
        closeOnSelect={false}
        onClick={handleCheck}
        endContent={
          <Switch
            size="sm"
            isSelected={theme === "dark"}
            onValueChange={handleCheck}
          />
        }
      >
        Darkmode
      </DropdownItem>
      <DropdownItem
        onClick={() => signOut()}
        color="danger"
        className="bg-danger text-white hover:opacity-80"
        startContent={<LuLogOut size={24} />}
      >
        Logout
      </DropdownItem>
    </DropdownMenu>
  );
};

export default MenuSession;
