import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const orderRoute = createTRPCRouter({
  createOrder: protectedProcedure
    .input(
      z.object({
        roomId: z.string(),
        price: z.number(),
        startDate: z.date(),
        endDate: z.date(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const rooms = await ctx.db.room.findFirstOrThrow({
        where: {
          id: input.roomId,
        },
      });
      if (rooms.userId === userId) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "owner cannot make this reservation",
        });
      }
      try {
        const order = await ctx.db.reservation.create({
          data: {
            roomId: input.roomId,
            startDate: input.startDate,
            endDate: input.endDate,
            totalPrice: input.price,
            userId,
          },
        });
        return order.id;
      } catch (error) {
        if (error instanceof Error) {
          throw new TRPCError({ code: "BAD_REQUEST", message: error.message });
        }
      }
    }),
  getOrder: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const order = await ctx.db.reservation.findFirstOrThrow({
        where: {
          id: input.id,
          userId: ctx.session.user.id,
        },
        include: {
          room: {
            include: {
              rating: true,
              imageRoom: true,
            },
          },
        },
      });
      const length = order.room.rating.length;
      const rating =
        order.room.rating.reduce((cur, acc) => cur + acc.value, 0) / length;
      const result = length === 0 ? length : rating;
      return {
        order,
        result,
      };
    }),
  removeOrder: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const order = await ctx.db.reservation.delete({
        where: {
          id: input.id,
          userId: ctx.session.user.id,
        },
      });
      return order.roomId;
    }),
  confirmPayment: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const order = await ctx.db.reservation.update({
        where: {
          id: input.id,
          userId: ctx.session.user.id,
        },
        data: {
          status: "ordered",
        },
      });

      const user = await ctx.db.user.findUniqueOrThrow({
        where: {
          id: ctx.session.user.id,
        },
      });
      const rooms = await ctx.db.room.findUniqueOrThrow({
        where: {
          id: order.roomId,
        },
        include: {
          user: true,
        },
      });

      await ctx.db.notifi.create({
        data: {
          message: "has successfully made a reservation",
          isRead: false,
          reservationId: order.id,
          roomId: rooms.id,
          userId: ctx.session.user.id,
        },
      });

      await ctx.db.notifi.create({
        data: {
          message: `${user.name} made a reservation`,
          role: "owner",
          isRead: false,
          reservationId: order.id,
          roomId: rooms.id,
          userId: rooms.userId,
        },
      });
    }),
});
