"use client";
import { categories } from "@/dummy";
import { cn } from "@nextui-org/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const Categories = () => {
  const path = usePathname();
  const params = useSearchParams();
  const category = params?.get("category");
  if (path !== "/") {
    return null;
  }
  return (
    <div className="container flex flex-1 items-center gap-5">
      <div className="flex flex-row items-center justify-between gap-x-4 overflow-x-auto pt-4">
        {categories.map((item) => (
          <Link
            href={{
              pathname: "/",
              query: { category: item.label },
            }}
            key={item.label}
            className={cn(
              "flex cursor-pointer flex-col flex-wrap items-center justify-center gap-2 border-b-2 p-3 transition hover:text-foreground",
              {
                "border-b-2 border-foreground": category === item.label,
                " border-transparent text-neutral-500": category !== item.label,
              },
            )}
          >
            <item.icon size={26} />
            <div className="whitespace-nowrap text-sm font-medium">
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
