import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "@/trpc/react";
import { Providers } from "@/components/providers/Providers";
import SessionProvider from "@/components/providers/SessionProvider";
import { getServerAuthSession } from "@/server/auth";
import ModalAuth from "@/components/template/modal/ModalAuth";

export const metadata = {
  title: "Ngendong",
  description:
    "Ngendong adalah platform sewa properti yang menyediakan akses mudah dan cepat untuk menemukan apartemen, rumah, gedung, dan properti lainnya sesuai kebutuhan Anda. Dengan beragam pilihan yang luas dan berkualitas, Ngendong memudahkan pengguna untuk menemukan tempat tinggal atau ruang komersial yang sesuai dengan preferensi dan anggaran mereka. Dilengkapi dengan fitur pencarian yang canggih dan sistem booking yang aman, Ngendong memastikan pengalaman pengguna yang nyaman dan menyenangkan dalam mencari serta menyewa properti impian mereka.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <SessionProvider session={session}>
          <TRPCReactProvider>
            <Providers>
              {children}
              <ModalAuth />
            </Providers>
          </TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
