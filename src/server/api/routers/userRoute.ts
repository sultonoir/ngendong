import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { hash } from "bcrypt-ts";

export const userRoute = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const exist = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (exist) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "email has been used",
        });
      }
      const hashed = await hash(input.password, 10);

      function emailToString(email: string): string {
        // Pisahkan alamat email menggunakan '@' sebagai pemisah
        const potongan = email.split("@");

        // Ambil nama depan (bagian pertama setelah pemisah '@')
        const namaDepan = potongan[0];

        return namaDepan!;
      }
      const createUser = await ctx.db.user.create({
        data: {
          email: input.email,
          name: emailToString(input.email),
          hashedPassword: hashed,
        },
      });
      return createUser.email;
    }),
});
