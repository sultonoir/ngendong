import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  getAllRooms: publicProcedure.query(async ({ ctx }) => {
    const rooms = await ctx.db.room.findMany({
      include: {
        imageRoom: true,
        user: true,
      },
    });
    return rooms;
  }),
});
