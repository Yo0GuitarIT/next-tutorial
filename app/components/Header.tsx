import ThemeButton from './ThemeButton';

function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-800 p-2 text-white">
      <h1 className="text-2xl font-bold">{"Yo0's"} Blog</h1>
      <ThemeButton />
    </header>
  );
}

export default Header;
