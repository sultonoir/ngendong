"use client";
import React from "react";
import { LodgingType } from "@/dummy";
import { cn } from "@nextui-org/react";
import useDraft from "@/hooks/useDraft";

const FieldPrivacy = () => {
  const { type, typeChange } = useDraft();

  return (
    <React.Fragment>
      <div className="container relative flex min-h-[calc(100dvh-150px)] max-w-fit flex-col">
        <div className="my-auto grid h-full grid-cols-1 items-center justify-center">
          <h1 className="h-fit text-center text-4xl font-semibold">
            What type of place will guests have?
          </h1>
          <ul className="my-10 grid h-fit grid-cols-1 gap-4">
            {LodgingType.map((category) => (
              <li
                key={category.label}
                onClick={() => {
                  typeChange(category.key);
                }}
                className={cn(
                  "flex cursor-pointer flex-row items-start justify-between gap-2 rounded-lg border border-default/50 p-4 hover:border-foreground/50 hover:bg-content2",
                  {
                    "border-foreground/50 bg-content2": type === category.key,
                  },
                )}
              >
                <div className="flex max-w-md flex-col gap-1">
                  <h2 className="text-lg">{category.label}</h2>
                  <p className="text-sm dark:text-foreground/50">
                    {category.desc}
                  </p>
                </div>
                <category.icon className="size-12 flex-shrink-0" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FieldPrivacy;
