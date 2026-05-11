import { MetadataRoute } from 'next';
import { siteContent } from '@/data/siteContent';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://venkatesh-sheet-metal.vercel.app';

  const staticRoutes = [
    '',
    '/about',
    '/products',
    '/blog',
    '/contact',
    '/team',
    '/certifications',
    '/gallery',
    '/exhibitions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogRoutes = siteContent.blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
