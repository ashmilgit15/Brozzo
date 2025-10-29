// Web App Manifest for Brozzo showcase site
// Enables "Add to Home Screen" on mobile devices

export default function manifest() {
  return {
    name: 'Brozzo — Classic, Reimagined',
    short_name: 'Brozzo',
    description: 'Every step shaped by craft. Discover stylish, quality footwear and accessories at Brozzo, Koppam, Kerala.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF9F7',
    theme_color: '#0F1724',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

