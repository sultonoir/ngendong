"use client";

import { categories } from "@/dummy";
import { Button, cn } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";
import { useParams, usePathname, useRouter } from "next/navigation";
import { api } from "@/trpc/react";
import { toast } from "sonner";

const StructureClient = () => {
  const [select, setSelect] = React.useState("");
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<{ id: string }>();

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  const next = api.lodging.updateDraft.useMutation({
    onSuccess: () => {
      router.push(`/become-a-host/${params.id}/privacy-type`);
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  const back = api.lodging.updateDraft.useMutation({
    onSuccess: () => {
      router.push(`/become-a-host/`);
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  const handleNext = () => {
    next.mutate({
      pathname,
      category: select,
      id: params.id,
    });
  };

  const handleBack = () => {
    back.mutate({
      pathname,
      id: params.id,
    });
  };

  return (
    <>
      <div className="container mt-10 max-w-screen-md">
        <h1 className="text-center text-4xl font-semibold">
          Choose your property type - Airbnb
        </h1>
        <ul className="my-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.li
              key={category.label}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              onClick={() => {
                setSelect(category.value);
              }}
              className={cn(
                "flex cursor-pointer flex-col items-start justify-center rounded-lg border border-default/50 p-4 hover:border-foreground/50 hover:bg-content2",
                {
                  "border-foreground/50 bg-content2": select === category.value,
                },
              )}
            >
              <category.icon className="size-12" />
              <span className="text-base">{category.label}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="sticky bottom-0 bg-background">
        <div className="flex w-full flex-col">
          <div className="flex h-2 items-center gap-4">
            <div className="relative size-full bg-content2">
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "20%" }}
                transition={{ delay: 0.175 }}
                style={{ width: "20%" }}
                className="absolute inset-0 bg-white transition-all"
              />
            </div>
            <div className="relative size-full bg-content2"></div>
            <div className="relative size-full bg-content2"></div>
          </div>
          <div className="flex items-center justify-between px-10 py-4">
            <Button
              isDisabled={back.isPending}
              isLoading={back.isPending}
              onClick={handleBack}
              variant="light"
            >
              <span className="underline underline-offset-4">Back</span>
            </Button>
            <Button
              isDisabled={next.isPending}
              isLoading={next.isPending}
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StructureClient;
