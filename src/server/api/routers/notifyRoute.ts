import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const notifyRoute = createTRPCRouter({
  getNotifyCount: protectedProcedure.query(async ({ ctx }) => {
    const notifi = await ctx.db.notifi.findMany({
      where: {
        userId: ctx.session.user.id,
        isOpen: false,
      },
    });
    return notifi.length;
  }),
  getNotifyforpayment: protectedProcedure.mutation(async ({ ctx }) => {
    await ctx.db.notifi.updateMany({
      where: {
        userId: ctx.session.user.id,
      },
      data: {
        isOpen: true,
      },
    });
  }),
});
