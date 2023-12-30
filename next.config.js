/** @type {import('next').NextConfig} */
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    images: {
        domains: ['assets.nflxext.com', 'occ-0-6246-2186.1.nflxso.net', 'image.tmdb.org'],
      },
    cssModules: true
}
