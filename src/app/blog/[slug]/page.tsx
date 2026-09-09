import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, profile } from "@/data/portfolio";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — ${profile.name}` : profile.name };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/blog"
        className="text-sm text-foreground/50 hover:text-accent"
      >
        ← Back to blog
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">
        {post.title}
      </h1>
      <time dateTime={post.date} className="mt-2 block text-sm text-foreground/50">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <div className="mt-8 space-y-4 text-foreground/80">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
