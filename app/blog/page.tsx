import Link from 'next/link';
import { getPosts } from '@/lib/posts';

export default function BlogPage() {
  const posts = getPosts();

  return (
    <section className="prose prose-zinc mx-auto max-w-3xl dark:prose-invert">
      <h1 className="mb-4 text-3xl font-bold">Blog</h1>
      <ul className="list-none p-0">
        {posts.map((post) => (
          <li key={post.slug} className="mb-4 p-0">
            <Link href={`/blog/${post.slug}`} className="no-underline">
              <div className="rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50 dark:border-zinc-700 dark:hover:bg-zinc-800">
                <h2 className="m-0 text-xl font-semibold">{post.title}</h2>
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
