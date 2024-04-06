import React from "react";
import LocationClient from "./LocationClient";

export const metadata = {
  title: "Enter the locations - Ngendong",
  description:
    "Ngendong adalah platform sewa properti yang menyediakan akses mudah dan cepat untuk menemukan apartemen, rumah, gedung, dan properti lainnya sesuai kebutuhan Anda. Dengan beragam pilihan yang luas dan berkualitas, Ngendong memudahkan pengguna untuk menemukan tempat tinggal atau ruang komersial yang sesuai dengan preferensi dan anggaran mereka. Dilengkapi dengan fitur pencarian yang canggih dan sistem booking yang aman, Ngendong memastikan pengalaman pengguna yang nyaman dan menyenangkan dalam mencari serta menyewa properti impian mereka.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const Page = () => {
  return <LocationClient />;
};

export default Page;
