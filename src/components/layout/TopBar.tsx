"use client"

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '@/src/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const themeContext = useContext(ThemeContext);

  return (
    <header className="h-16 border-b bg-white dark:bg-black flex items-center justify-between px-6">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <h1 className="text-xl font-bold">KnouxCore</h1>
      </div>
      
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        {themeContext && (
          <button
            onClick={themeContext.toggleTheme}
            className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            title="تبديل السمة"
          >
            {themeContext.theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
        )}
        <button 
          onClick={() => navigate('/services')}
          className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md hover:opacity-90 transition-opacity"
        >
          الخدمات
        </button>
      </div>
    </header>
  );
};

export default TopBar;
