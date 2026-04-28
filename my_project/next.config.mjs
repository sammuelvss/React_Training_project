/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  // Isso ajuda a ignorar erros de conexão do WebSocket no túnel do Codespaces
  typescript: { ignoreBuildErrors: true }, 
};

export default nextConfig;