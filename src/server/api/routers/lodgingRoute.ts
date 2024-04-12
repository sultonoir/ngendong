import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import slugify from "slugify";

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
      const updateUser = await ctx.db.user.update({
        where: {
          id,
        },
        data: {
          role: "admin",
        },
      });
      return updateUser.role;
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
        image: z.array(
          z.object({
            url: z.string(),
          }),
        ),
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
      const slug = slugify(input.title, {
        lower: true,
      });
      const lodging = await ctx.db.room.create({
        data: {
          title: input.title,
          slug,
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
      if (!lodging.id) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "failing to make room",
        });
      }
      const createImgRoom = await Promise.all(
        input.image.map((item) =>
          ctx.db.imageRoom.create({
            data: {
              roomId: lodging.id,
              url: item.url,
            },
          }),
        ),
      );
      if (!createImgRoom.length) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "failing to make image rooms",
        });
      }
      const fasilitasRooms = await Promise.all(
        input.amenities.map((item) =>
          ctx.db.fasilitas.create({
            data: {
              roomId: lodging.id,
              fasilitas: item.fasilitas,
            },
          }),
        ),
      );
      if (!fasilitasRooms.length) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "failing to make fasility rooms",
        });
      }
      const locations = await ctx.db.locationRoom.create({
        data: {
          roomId: lodging.id,
          country: input.locations.country,
          latitude: input.locations.latitude,
          longitude: input.locations.longitude,
          name: input.locations.name,
        },
      });

      if (!locations) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "failing to make locations rooms",
        });
      }

      return lodging.slug;
    }),
  getLodging: publicProcedure
    .input(
      z.object({
        category: z.string().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const lodging = await ctx.db.room.findMany({
        where: {
          category: input.category,
        },
        include: {
          imageRoom: true,
          fasilitas: true,
          rating: true,
          locationValue: true,
        },
      });
      return lodging;
    }),
  getMyLodging: protectedProcedure.query(async ({ ctx }) => {
    const lodging = await ctx.db.room.findFirstOrThrow({
      where: {
        userId: ctx.session.user.id,
      },
      include: {
        imageRoom: true,
        fasilitas: true,
        rating: true,
        locationValue: true,
      },
    });
    return lodging;
  }),
  getLodgingByName: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const lodging = await ctx.db.room.findUnique({
        where: {
          slug: input.slug,
        },
        include: {
          imageRoom: true,
          fasilitas: true,
          rating: true,
          locationValue: true,
          user: true,
        },
      });
      return lodging;
    }),
});
