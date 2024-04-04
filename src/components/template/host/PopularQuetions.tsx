"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
const PopularQuetions = () => {
  const lists = [
    {
      title: "Is my place right for Ngendong?",
      desc: "Ngendong guests are interested in all kinds of places. We have listings for tiny homes, cabins, treehouses, and more. Even a spare room can be a great place to stay.",
    },
    {
      title: "Do I have to host all the time?",
      desc: "Not at all—you control your calendar. You can host once a year, a few nights a month, or more often.",
    },
    {
      title: "How much should I interact with guests?",
      desc: "It's up to you. Some Hosts prefer to message guests only at key moments—like sending a short note when they check in—while others also enjoy meeting their guests in person. You'll find a style that works for you and your guests.",
    },
    {
      title: "Any tips on being a great Ngendong Host?",
      desc: "Getting the basics down goes a long way. Keep your place clean, respond to guests promptly, and provide necessary amenities, like fresh towels. Some Hosts like adding a personal touch, such as putting out fresh flowers or sharing a list of local places to explore—but it's not required.",
    },
    {
      title: "What are Ngendong's fees?",
      desc: "Ngendong typically collects a flat service fee of 3% of the reservation subtotal when you get paid. We also collect a fee from guests when they book. In many areas, Ngendong collects and pays sales and tourism taxes automatically on your behalf as well.",
    },
  ];
  return (
    <section className="bg-[#F7F7F7] py-10 dark:bg-content1">
      <div className="container max-w-screen-lg">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
          <div className="w-full">
            <p className="text-2xl font-bold lg:text-4xl">
              <span>Your questions,</span>
              <br />
              <span> answered</span>
            </p>
          </div>
          <Accordion>
            {lists.map((list) => (
              <AccordionItem key={list.title} title={list.title}>
                {list.desc}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-10 flex flex-col gap-4 overflow-hidden rounded-lg bg-content1 dark:bg-content2 lg:flex-row lg:gap-10">
          <div className="relative aspect-video flex-1">
            <Image
              src="/people.png"
              alt="logo"
              fill
              loading="eager"
              sizes="(min-width: 1040px) 460px, calc(100vw - 64px)"
              className="size-auto object-contain"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-4 p-4 lg:p-0">
            <p className="font-semibold lg:text-[32px]">
              Still have questions?
            </p>
            <p className="text-muted-foreground">
              Get answers from an experienced Superhost near you.
            </p>
            <Button
              variant="ghost"
              className="w-fit rounded-lg border border-foreground bg-transparent hover:bg-zinc-500/10"
            >
              <span>Match with a Superhost</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularQuetions;
