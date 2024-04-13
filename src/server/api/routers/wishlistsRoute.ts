import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const wishlistRoute = createTRPCRouter({
  getWishlists: protectedProcedure
    .input(
      z.object({
        roomId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const id = ctx.session.user.id;
      if (!id) {
        return null;
      }
      const wishlist = await ctx.db.whishlist.findMany({
        where: {
          userId: ctx.session?.user.id,
          roomId: input.roomId,
        },
      });
      const result = wishlist.length ? true : false;
      return result;
    }),
  addWishlist: protectedProcedure
    .input(
      z.object({
        roomId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const wishlist = await ctx.db.whishlist.findMany({
        where: {
          userId: ctx.session.user.id,
          roomId: input.roomId,
        },
      });
      if (wishlist.length) {
        await ctx.db.whishlist.deleteMany({
          where: {
            roomId: input.roomId,
            userId: ctx.session.user.id,
          },
        });
        return false;
      } else {
        await ctx.db.whishlist.create({
          data: {
            roomId: input.roomId,
            userId: ctx.session.user.id,
          },
        });
        return true;
      }
    }),
});
