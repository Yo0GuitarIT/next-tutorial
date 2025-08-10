'use client';

import { useParams } from 'next/navigation';

function BlogPostPage() {
  const params = useParams();
  console.log('Blog Post Params:', params);

  return <div>Blog Post: {params.slug}</div>;
}
export default BlogPostPage;
