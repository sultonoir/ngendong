import { api } from "@/trpc/server";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const data = await api.lodging.getDraft({});
  return (
    <div>
      <Link href={data?.pathname ?? "/"}>Click me</Link>
    </div>
  );
};

export default Page;
