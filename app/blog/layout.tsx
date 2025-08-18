import { ReactNode } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
}

function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <>
      {children}
    </>
  );
}

export default BlogLayout;
