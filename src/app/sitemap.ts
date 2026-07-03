import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://daivo.tech';

  // Website ke saare available routes/pages ki array
  const routes = ['', '/services', '/about', '/portfolio', '/contact'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8, // Home page ko sabse zyada priority (1.0) di hai
  }));
}