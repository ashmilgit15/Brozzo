import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: 'Brozzo — Classic, Reimagined | Koppam, Kerala',
  description: 'Every step shaped by craft. Discover stylish, quality footwear and accessories at Brozzo, Koppam, Kerala.',
  keywords: ['Brozzo', 'Koppam', 'Kerala', 'footwear', 'retail', 'fashion', 'style'],
  authors: [{ name: 'Brozzo' }],
  openGraph: {
    title: 'Brozzo — Classic, Reimagined',
    description: 'Every step shaped by craft.',
    type: 'website',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0F1724',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-brozzo-off-white text-brozzo-charcoal">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brozzo-navy focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}

