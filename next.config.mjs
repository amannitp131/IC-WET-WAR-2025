/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.nitp.ac.in',
      },
      {
        protocol: 'https',
        hostname: 'nitap.ac.in',
      },
      {
        protocol: 'https',
        hostname: 'ugcounselor-content.s3.ap-south-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'scholar.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'channeli.in',
      },
      {
        protocol: 'https',
        hostname: 'nihroorkee.gov.in',
      },
      {
        protocol: 'https',
        hostname: 'up.yimg.com',
      },
      {
        protocol: 'https',
        hostname: 'tse2.mm.bing.net',
      },
      {
        protocol: 'https',
        hostname: 'tse3.mm.bing.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i1.rgstatic.net',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'spa.ac.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.jagranimages.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'brsa.org.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cwrdm.kerala.gov.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'iitg.ac.in',
        pathname: '/aiwc/sites/default/files/file_upload/**',
      },
    ],
  },
};

export default nextConfig;
