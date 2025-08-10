import Link from 'next/link';
import { getSortedPostsData, PostData } from '@/app/lib/posts';

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <section>
      <h2>Blog</h2>
      <ul>
        {allPostsData.map(({ id, date, title }: PostData) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>{title}</Link>
            <br />
            <small>
              {date}
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}