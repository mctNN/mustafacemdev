/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Bu seçenek React hidrasyon uyarılarını bastırır
  onDemandEntries: {
    // Bu değerler isteğe bağlı olarak değiştirilebilir
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
