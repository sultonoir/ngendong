import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const useRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });
      if (user) {
        return user.email;
      }
      const createUser = await ctx.db.user.create({
        data: {
          email: input.email,
        },
      });
      return createUser.email;
    }),
});
