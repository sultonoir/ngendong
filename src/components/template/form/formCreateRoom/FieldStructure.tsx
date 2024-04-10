"use client";

import { categories } from "@/dummy";
import { cn } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";
import useDraft from "@/hooks/useDraft";

const FieldStructure = () => {
  const { category, categoryChange } = useDraft();

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

  return (
    <>
      <div className="container mt-10 max-w-screen-md">
        <h1 className="text-center text-4xl font-semibold">
          Choose your property type - Airbnb
        </h1>
        <ul className="my-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {categories.map((item, index) => (
            <motion.li
              key={item.label}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: false,
              }}
              custom={index}
              onClick={() => {
                categoryChange(item.value);
              }}
              className={cn(
                "flex cursor-pointer flex-col items-start justify-center rounded-lg border border-default/50 p-4 hover:border-foreground/50 hover:bg-content2",
                {
                  "border-foreground/50 bg-content2": category === item.value,
                },
              )}
            >
              <item.icon className="size-12" />
              <span className="text-base">{item.label}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FieldStructure;
