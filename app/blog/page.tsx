import HeroInner from '@/components/shared/HeroInner';
import BlogGrid from '@/components/sections/blog/BlogGrid';
import { siteContent } from '@/data/siteContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Knowledge Hub | PYKK Blog',
  description: 'Insights on operations management, AI integration, and knowledge capital from the founders of PYKK.',
};

export default function BlogPage() {
  return (
    <main>
      <HeroInner {...siteContent.blogHero} />
      <BlogGrid posts={siteContent.blogPosts} />
    </main>
  );
}
