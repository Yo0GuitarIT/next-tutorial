import ThemeButton from './ThemeButton';
import Link from 'next/link';

function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-800 p-2 text-white">
      <Link href="/" className="text-2xl font-bold">
        {"Yo0's"} Blog
      </Link>
      <Link href="/about" className="hover:underline">
        About
      </Link>
      <Link href="/blog" className="hover:underline">
        Blog
      </Link>
      <ThemeButton />
    </header>
  );
}

export default Header;
