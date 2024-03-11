import { Button } from "@/components/ui/button";
import React from "react";
import { IoSearch } from "react-icons/io5";
const SearchButton = () => {
  return (
    <div className="inline-flex h-12 w-fit cursor-pointer items-center rounded-full border hover:shadow-md lg:ml-36">
      <div className="flex w-full items-center gap-4 divide-x pl-5 pr-1.5">
        <p>kemana saja</p>
        <p className="pl-4">minggu mana pun</p>
        <p className="pl-4 text-muted-foreground">tambahkan tamu</p>
        <Button size="icon" className="rounded-full">
          <IoSearch size={20} className="stroke-2" />
        </Button>
      </div>
    </div>
  );
};

export default SearchButton;
