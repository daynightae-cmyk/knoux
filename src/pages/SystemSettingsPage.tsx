"use client"

import React from 'react';
import { Card } from "@/components/ui/card";
import { Settings, Sun, Moon, Globe, Bell, Shield, Check } from 'lucide-react';
import { ThemeContext } from '@/contexts/ThemeContext';
import { useSystemSettings } from '@/contexts/SystemSettingsContext';

const SystemSettingsPage: React.FC = () => {
  const themeCtx = React.useContext(ThemeContext);
  const { settings, updateSettings } = useSystemSettings();
  const [saved, setSaved] = React.useState(false);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (themeCtx && val !== themeCtx.theme) {
      themeCtx.toggleTheme();
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateSettings({ language: e.target.value });
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">إعدادات النظام</h1>
        {saved && (
          <span className="flex items-center space-x-1.5 rtl:space-x-reverse text-sm text-green-500 font-semibold bg-green-500/10 px-3 py-1.5 rounded-lg">
            <Check className="h-4 w-4" />
            <span>تم حفظ التغييرات بنجاح</span>
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
            <Settings className="h-6 w-6 text-cyan-500" />
            <h2 className="text-2xl font-semibold">الإعدادات العامة</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                {themeCtx?.theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                <span>المظهر</span>
              </div>
              <select 
                value={themeCtx?.theme || 'dark'}
                onChange={handleThemeChange}
                className="p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm"
              >
                <option value="light">فاتح (Light)</option>
                <option value="dark">داكن (Dark)</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Globe className="h-5 w-5" />
                <span>اللغة</span>
              </div>
              <select 
                value={settings.language || 'ar'}
                onChange={handleLanguageChange}
                className="p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm"
              >
                <option value="ar">العربية (Arabic)</option>
                <option value="en">English</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Bell className="h-5 w-5" />
                <span>الإشعارات</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-black/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
              </label>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
            <Shield className="h-6 w-6 text-purple-500" />
            <h2 className="text-2xl font-semibold">الأمان والخصوصية</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span>المصادقة الثنائية (2FA)</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-black/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <span>تشفير البيانات اللحظي</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-black/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
              </label>
            </div>

            <button 
              onClick={handleSave}
              className="w-full mt-4 px-4 py-2.5 bg-black text-white dark:bg-white dark:text-black font-medium rounded-xl hover:opacity-90 transition-opacity"
            >
              حفظ الإعدادات
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SystemSettingsPage;
