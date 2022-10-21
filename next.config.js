/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source : '/old-blog/:path*',
        destination : '/new-blog/:path*', //다른 url 이동 -> 유저가 변경된 url을 인지
        permanent : false,
      },
    ]
  },
  async rewrites() { //redirect시키지만 url은 변하지 않는다.
    return [
      {
         source : "/api/movies",
         destination : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}` //유저가 api키를 볼 수 없음.
      },
      {
        source : "/api/movies/:id",
        destination : `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}` 
      },
      
    ]
  }
}

module.exports = nextConfig
