import HeroInner from '@/components/shared/HeroInner';
import ArticleBody from '@/components/sections/blog/ArticleBody';
import RelatedPosts from '@/components/sections/blog/RelatedPosts';
import { siteContent } from '@/data/siteContent';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return siteContent.blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = siteContent.blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = siteContent.blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = siteContent.blogPosts
    .filter((p) => p.slug !== params.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <main>
      <HeroInner
        badge={post.category}
        headline={post.title}
        subline={`${post.date} · ${post.author} · ${post.readTime}`}
        backgroundImage={post.image}
      />
      <ArticleBody 
        post={post} 
        relatedPosts={relatedPosts} 
        whatsappNumber={siteContent.company.whatsapp} 
      />
      <RelatedPosts headline="Read More Articles" posts={relatedPosts} />
    </main>
  );
}
