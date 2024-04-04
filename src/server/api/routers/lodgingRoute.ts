import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const lodgingRoute = createTRPCRouter({
  toBeOwner: protectedProcedure.mutation(async ({ ctx }) => {
    const id = ctx.session.user.id;
    const user = await ctx.db.user.findUnique({
      where: {
        id,
      },
    });
    if (user?.role === "admin") {
      return;
    } else {
      await ctx.db.user.update({
        where: {
          id,
        },
        data: {
          role: "admin",
        },
      });
    }
  }),
  createDraft: protectedProcedure.mutation(async ({ ctx }) => {
    console.log("hallo");
  }),
});
