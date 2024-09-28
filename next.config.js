/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  optimizeFonts: false,
  images: {
    domains: ["user-images.githubusercontent.com", "cdn.hashnode.com", "github.com"],
  },
  // fontLoaders: [
  //   {
  //     loader: "@next/font/google",
  //     options: {
  //       subsets: ["latin"],
  //       weight: ["400", "500", "600", "700", "800"],
  //     },
  //   },
  // ],
};
// next.config.js
module.exports = {
  experimental: {
    appDir: true, // Ensure this is set if using the app directory
  },
  // other config
};

module.exports = nextConfig;

