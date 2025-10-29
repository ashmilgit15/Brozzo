// Sitemap generation for Brozzo showcase site
// Next.js will automatically generate sitemap.xml from this file

export default function sitemap() {
  const baseUrl = 'https://brozzo.com' // Update with your actual domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}

