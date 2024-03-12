"use client";
import TestForm from "@/components/template/form/TestForm";
import { api } from "@/trpc/react";
import Image from "next/image";
import React from "react";

export const dynamic = "force-dynamic";
const page = () => {
  const { data, isLoading } = api.post.getAllNovel.useQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container pt-10">
      <TestForm />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-6">
        {!data ? null : (
          <>
            {data.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <Image
                  alt={item.title}
                  src={item.image ?? "/logo.png"}
                  className="aspect-square object-cover"
                  priority
                  width={200}
                  height={200}
                  loading="eager"
                />
                <p className="truncate text-lg leading-none">{item.title}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default page;
