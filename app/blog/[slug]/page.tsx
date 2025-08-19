import { getPost, getPosts } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from '@/app/components/MdxRenderComponents';
import HelloMdx from '@/app/components/HelloMdx';

// Statically generate routes at build time
export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  return { title: post.title };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  const baseComponents = useMDXComponents();

  const components = {
    ...baseComponents,
    HelloMdx, // Register our custom component
  };

  return (
    <article className="prose prose-zinc mx-auto max-w-3xl dark:prose-invert">
      <h1 className="text-4xl font-extrabold tracking-tight">{post.title}</h1>
      <time className="text-sm text-gray-500 dark:text-gray-400">
        {new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
      <div className="mt-8">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}
