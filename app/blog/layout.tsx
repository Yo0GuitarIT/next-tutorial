import { ReactNode } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
}

function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div>
      <h1>Blog Page Layout</h1>
      {children}
    </div>
  );
}

export default BlogLayout;
