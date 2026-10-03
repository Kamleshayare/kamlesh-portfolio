import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      {
        source: "/lets-meet",
        destination: "https://meet.google.com/siu-xmnb-cws",
        permanent: false,
      },
      {
        source: "/lecture",
        destination: "https://meet.google.com/hwr-zfar-pyi",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
