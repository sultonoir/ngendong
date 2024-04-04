import Image from "next/image";
import React from "react";

const Profit = () => {
  const profitlist = [
    {
      title: "One-to-one guidance from a Superhost",
      desc: "We'll match you with a Superhost in your area, who'll guide you from your first question to your first guest—by phone, video call, or chat.",
    },
    {
      title: "An experienced guest for your first booking",
      desc: "For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Ngendong.",
    },
    {
      title: "Specialized support from Ngendong",
      desc: "New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.",
    },
  ];
  return (
    <section className="container my-10 grid justify-center">
      <p className="h-fit text-center font-bold lg:text-4xl">
        Ngendong it easily with Ngendong Setup
      </p>
      <div className="relative flex h-[200px] w-full lg:h-[50dvh]">
        <Image
          src="/profit.png"
          alt="logo"
          fill
          loading="eager"
          sizes="(min-width: 1480px) 1040px, (min-width: 1040px) calc(15.24vw + 818px), (min-width: 420px) 320px, calc(84vw - 16px)"
          className="size-auto object-contain"
        />
      </div>
      <div className="mt-5 flex flex-col items-center justify-center gap-3 lg:flex-row lg:gap-10">
        {profitlist.map((profit) => (
          <div key={profit.title} className="max-w-xs">
            <p className="text-2xl font-medium">{profit.title}</p>
            <p className="text-left text-default-500">{profit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profit;
