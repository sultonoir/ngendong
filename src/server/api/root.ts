import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { userRoute } from "./routers/userRoute";
import { lodgingRoute } from "./routers/lodgingRoute";
import { wishlistRoute } from "./routers/wishlistsRoute";
import { orderRoute } from "./routers/orderRoute";
import { notifyRoute } from "./routers/notifyRoute";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRoute,
  lodging: lodgingRoute,
  wishlists: wishlistRoute,
  order: orderRoute,
  notify: notifyRoute,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
