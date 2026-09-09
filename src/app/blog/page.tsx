import Link from "next/link";
import type { Metadata } from "next";
import { posts, profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Blog",
  description: `Notes and writing from ${profile.name}.`,
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-3 text-foreground/70">
        Notes on projects, things I&apos;m learning, and whatever else feels
        worth writing down.
      </p>

      <ul className="mt-12 divide-y divide-black/10 dark:divide-white/10">
        {posts.map((post) => (
          <li key={post.slug} className="py-6 first:pt-0">
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="font-medium group-hover:text-accent">
                  {post.title}
                </h2>
                <time
                  dateTime={post.date}
                  className="text-sm text-foreground/50"
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <p className="mt-2 text-sm text-foreground/70">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
