import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
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
    const userId = ctx.session.user.id;
    const exist = await ctx.db.drafRooms.findFirst({
      where: {
        userId: { contains: userId },
      },
    });
    if (exist) {
      await ctx.db.drafRooms.delete({
        where: {
          id: exist.id,
          userId,
        },
      });
    }
    try {
      const lodging = await ctx.db.drafRooms.create({
        data: {
          userId,
        },
      });
      return lodging.id;
    } catch (error) {
      if (error instanceof Error) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message });
      }
    }
  }),
  updateDraft: protectedProcedure
    .input(
      z.object({
        id: z.string().optional(),
        pathname: z.string().optional(),
        title: z.string().optional(),
        slug: z.string().optional(),
        description: z.string().optional(),
        bed: z.number().optional(),
        roomCount: z.number().optional(),
        guestCount: z.number().optional(),
        price: z.number().optional(),
        uniqK: z.boolean().optional(),
        type: z.string().optional(),
        category: z.string().optional(),
        locationValue: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      await ctx.db.drafRooms.update({
        where: {
          id: input.id,
          userId,
        },
        data: input,
      });
    }),
  getDraft: protectedProcedure
    .input(
      z.object({
        id: z.string().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const lodging = await ctx.db.drafRooms.findFirst({
        where: {
          OR: [
            {
              id: input.id,
              userId,
            },
          ],
        },
      });
      return lodging;
    }),
});
