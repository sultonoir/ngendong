import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const notifyRoute = createTRPCRouter({
  getNotifyCount: protectedProcedure.query(async ({ ctx }) => {
    const notifi = await ctx.db.notifi.findMany({
      where: {
        userId: ctx.session.user.id,
        isRead: false,
      },
    });
    return notifi.length;
  }),
});
