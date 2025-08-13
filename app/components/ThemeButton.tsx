'use client';
import { useState } from 'react';

import Sun from '@/public/sun.svg';
import Moon from '@/public/moon.svg';

function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleOnClick = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <button className="pointer rounded border bg-gray-50 p-1" onClick={handleOnClick}>
      {isDarkMode ? <Moon /> : <Sun />}
    </button>
  );
}

export default ThemeButton;
