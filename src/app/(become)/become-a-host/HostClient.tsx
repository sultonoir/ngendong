"use client";

import { api } from "@/trpc/react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const HostClient = () => {
  const router = useRouter();
  const { mutate, isPending } = api.lodging.createDraft.useMutation({
    onSuccess: (e) => {
      router.push(`/become-a-host/${e}/structure`);
    },
  });
  return (
    <React.Fragment>
      <main className="container h-[calc(100dvh-160px)] max-w-screen-xl">
        <section className="grid h-full grid-cols-1 items-center justify-center gap-10 lg:grid-cols-2">
          <div className="h-fit">
            <div className="flex flex-col justify-center gap-4 lg:gap-10">
              <span className="text-base font-semibold lg:text-lg">Step 1</span>
              <h1 className="text-4xl font-semibold lg:text-5xl">
                Tell us about your place
              </h1>
              <p className="text-base text-foreground/80">
                In this step, we&apos;ll ask you which type of property you have
                and if guests will book the entire place or just a room. Then
                let us know the location and how many guests can stay.
              </p>
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
      <div className="sticky bottom-0">
        <div className="flex w-full flex-col">
          <div className="flex h-2 items-center gap-4">
            <div className="relative size-full bg-content2"></div>
            <div className="relative size-full bg-content2"></div>
            <div className="relative size-full bg-content2">
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "20%" }}
                transition={{ delay: 0.175 }}
                style={{ width: "20%" }}
                className="absolute inset-0 bg-white transition-all"
              />
            </div>
          </div>
          <div className="flex items-center justify-end px-10 py-4">
            <Button isLoading={isPending} onClick={() => mutate()}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HostClient;
