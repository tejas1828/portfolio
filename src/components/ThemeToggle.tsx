import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full border border-border-color bg-bg-secondary text-text-primary hover:text-accent-primary hover:border-accent-primary transition-all duration-300 shadow-md hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-primary/50"
      title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-slate-700 hover:text-blue-600 transition-colors" />
      ) : (
        <Sun className="w-5 h-5 text-amber-400 hover:text-amber-300 transition-colors" />
      )}
    </button>
  );
};
