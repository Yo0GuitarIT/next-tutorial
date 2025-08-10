import { getAllPostIds, getPostData } from '@/app/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';

// This function tells Next.js which pages to statically generate
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <article>
      <h1>{postData.title}</h1>
      <div>
        {postData.date}
      </div>
      <hr />
      <MDXRemote source={postData.content} />
    </article>
  );
}