import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

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
  getAllNovel: publicProcedure.query(async ({ ctx }) => {
    const novels = await ctx.db.novel.findMany();
    return novels;
  }),
  postNovel: publicProcedure
    .input(
      z.object({
        title: z.string(),
        image: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.novel.create({
        data: {
          title: input.title,
          image: input.image,
        },
      });
    }),
});
