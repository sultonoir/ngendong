import { Toaster } from "@/components/providers/Toaster";
import ButtonTobeOwner from "@/components/template/host/ButtonTobeOwner";
import PopularQuetions from "@/components/template/host/PopularQuetions";
import Profit from "@/components/template/host/Profit";
import Revenue from "@/components/template/host/Revenue";
import Logo from "@/components/template/navbar/Logo";
import Header from "@/components/template/navbar/header";
import Image from "next/image";
import React from "react";

const page = () => {
  const num = Math.floor(Math.random() * 100) + 1;
  return (
    <main className="grid">
      <Header>
        <nav className="container flex items-center justify-between py-2">
          <Logo />
          <ButtonTobeOwner />
        </nav>
      </Header>
      <div className="container grid h-[calc(100dvh-67px)] grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <Revenue num={num} />
        <div className="relative flex size-full">
          <Image
            src="/hotel.png"
            alt="logo"
            fill
            loading="eager"
            sizes="(min-width: 1860px) 828px, (min-width: 1040px) 45vw, calc(100vw - 64px)"
            className="size-auto object-contain"
          />
        </div>
      </div>
      <Profit />
      <PopularQuetions />
      <Toaster richColors position="bottom-left" />
    </main>
  );
};

export default page;
