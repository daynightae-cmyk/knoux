"use client"

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Settings, 
  Download, 
  Shield, 
  Wifi, 
  Brain, 
  Sparkles, 
  ListChecks, 
  Puzzle, 
  HelpCircle, 
  Info 
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'لوحة التحكم' },
    { path: '/services', icon: Brain, label: 'الخدمات' },
    { path: '/ai-insights', icon: Sparkles, label: 'الرؤى الذكية' },
    { path: '/downloads', icon: Download, label: 'التحميلات' },
    { path: '/network', icon: Wifi, label: 'الشبكة' },
    { path: '/security', icon: Shield, label: 'الأمان' },
    { path: '/auditlog', icon: ListChecks, label: 'سجل التدقيق' },
    { path: '/plugins', icon: Puzzle, label: 'الملحقات' },
    { path: '/settings', icon: Settings, label: 'الإعدادات' },
    { path: '/help', icon: HelpCircle, label: 'المساعدة' },
    { path: '/about', icon: Info, label: 'حول النظام' },
  ];

  return (
    <aside className="w-64 border-r bg-white dark:bg-black/90 h-screen flex flex-col backdrop-blur-md shrink-0">
      <div className="p-6 border-b border-black/5 dark:border-white/10 flex items-center space-x-3 rtl:space-x-reverse">
        <img 
          src="https://i.postimg.cc/T3k13rnP/d04f3a9b-36ac-4127-953b-691a8b413256.png" 
          alt="KnouxCore Logo" 
          className="h-8 w-auto"
        />
        <span className="font-bold text-lg tracking-wider text-cyan-500">KnouxCore</span>
      </div>
      
      <nav className="flex-1 p-3 overflow-y-auto space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-3.5 py-2.5 rounded-xl transition-all text-sm font-medium ${
                isActive 
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-black/5 dark:border-white/10">
        <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-between">
          <span>KnouxCore v1.0.0</span>
          <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
