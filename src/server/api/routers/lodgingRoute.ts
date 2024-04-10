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
  createLodging: protectedProcedure
    .input(
      z.object({
        type: z.string(),
        category: z.string(),
        amenities: z.array(
          z.object({
            fasilitas: z.string(),
          }),
        ),
        locations: z.object({
          name: z.string(),
          country: z.string(),
          latitude: z.number(),
          longitude: z.number(),
        }),
        image: z.array(z.string()),
        unique: z.string(),
        title: z.string(),
        desc: z.string(),
        bed: z.number(),
        bedrooms: z.number(),
        guest: z.number(),
        price: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const lodging = ctx.db.room.create({
        data: {
          title: input.title,
          slug: "",
          description: input.desc,
          type: input.type,
          bed: input.bed,
          category: input.category,
          roomCount: input.bedrooms,
          guestCount: input.guest,
          price: input.price,
          userId,
        },
      });
    }),
});
