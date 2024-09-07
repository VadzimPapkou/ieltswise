import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ieltswise67.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://ieltswise67.vercel.app/tutors/neil-wood',
      lastModified: new Date(),
    }
  ]
}