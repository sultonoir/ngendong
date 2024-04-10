"use client";

import Image from "next/image";
import React from "react";

interface Props {
  ttl?: string;
  desc?: string;
  stp?: number;
}

const FieldHome = ({
  ttl = "Tell us about your place",
  desc = "In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.",
  stp = 1,
}: Props) => {
  return (
    <React.Fragment>
      <main className="container max-w-screen-xl">
        <section className="grid h-[calc(100dvh-150px)] grid-cols-1 items-center justify-center lg:grid-cols-2 lg:gap-10">
          <div className="h-fit">
            <div className="flex flex-col justify-center gap-4 lg:gap-10">
              <span className="text-base font-semibold lg:text-lg">
                Step {stp}
              </span>
              <h1 className="text-4xl font-semibold lg:text-5xl">{ttl}</h1>
              <p className="text-base text-foreground/80">{desc}</p>
            </div>
          </div>
          <div className="relative h-96 w-full lg:size-full">
            <Image
              src="/home.png"
              alt="logo"
              fill
              loading="eager"
              className="size-auto object-contain"
            />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default FieldHome;
