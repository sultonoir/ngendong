"use client";
import { api } from "@/trpc/react";
import React from "react";

const NotifyCount = () => {
  const { data } = api.notify.getNotifyCount.useQuery();

  if (!data || data === 0) {
    return null;
  }

  return (
    <span className="absolute right-0 top-0 flex size-5 items-center justify-center rounded-full border border-background bg-primary text-xs font-extrabold text-white">
      {data}
    </span>
  );
};

export default NotifyCount;
