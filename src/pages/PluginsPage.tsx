"use client"

import React, { useState } from 'react';
import { Card } from "@/src/components/ui/card";
import { Puzzle } from 'lucide-react';

interface PluginItem {
  id: string;
  name: string;
  description: string;
  version: string;
  author: string;
  enabled: boolean;
  category: string;
  downloads: string;
  rating: number;
}

const INITIAL_PLUGINS: PluginItem[] = [
  {
    id: 'p1',
    name: 'مسرع التنزيل الفائق (Turbo Accelerator)',
    description: 'تقسيم الملفات إلى أجزاء متعددة لزيادة سرعة التنزيل بنسبة تصل إلى 300%.',
    version: '2.4.0',
    author: 'Knoux Labs',
    enabled: true,
    category: 'الشبكة والسرعة',
    downloads: '14.2k',
    rating: 4.9,
  },
  {
    id: 'p2',
    name: 'فاحص الروابط التلقائي (Malware Guard)',
    description: 'فحص فوري وتحليل أمني لجميع الروابط والملفات قبل التنزيل لحماية النظام.',
    version: '1.8.2',
    author: 'Security Shield',
    enabled: true,
    category: 'الأمان والحماية',
    downloads: '9.8k',
    rating: 4.8,
  },
  {
    id: 'p3',
    name: 'المزامنة السحابية الذكية (Cloud Sync Pro)',
    description: 'رفع الملفات المكتملة تلقائياً إلى خدمات التخزين السحابي المدعومة.',
    version: '3.1.0',
    author: 'CloudCore',
    enabled: false,
    category: 'التخزين والمزامنة',
    downloads: '6.5k',
    rating: 4.6,
  },
  {
    id: 'p4',
    name: 'محلل حركة البيانات (Bandwidth Analyzer)',
    description: 'رسم بياني تفصيلي لاستهلاك النطاق الترددي وتوزيع الأولويات بين المهام.',
    version: '1.2.0',
    author: 'NetOps',
    enabled: true,
    category: 'التحليلات',
    downloads: '5.1k',
    rating: 4.7,
  },
];

const PluginsPage: React.FC = () => {
  const [plugins, setPlugins] = useState<PluginItem[]>(INITIAL_PLUGINS);
  const [activeTab, setActiveTab] = useState<'installed' | 'store'>('installed');

  const togglePlugin = (id: string) => {
    setPlugins((prev) =>
      prev.map((plugin) =>
        plugin.id === id ? { ...plugin, enabled: !plugin.enabled } : plugin
      )
    );
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-2">
            <Puzzle className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold">مركز الإضافات والمكونات</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            توسيع إمكانيات KnouxCore بإضافة أدوات متقدمة ومحركات تسريع ذكية
          </p>
        </div>

        <div className="flex bg-black/5 dark:bg-white/5 p-1 rounded-lg border border-black/10 dark:border-white/10 self-start">
          <button
            onClick={() => setActiveTab('installed')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'installed'
                ? 'bg-black text-white dark:bg-white dark:text-black shadow'
                : 'hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            الإضافات المثبتة ({plugins.length})
          </button>
          <button
            onClick={() => setActiveTab('store')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'store'
                ? 'bg-black text-white dark:bg-white dark:text-black shadow'
                : 'hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            متجر الإضافات
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plugins.map((plugin) => (
          <Card key={plugin.id} className="p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">{plugin.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-500 font-mono">
                      v{plugin.version}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    بواسطة {plugin.author} • {plugin.category}
                  </span>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={plugin.enabled}
                    onChange={() => togglePlugin(plugin.id)}
                  />
                  <div className="w-11 h-6 bg-black/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                {plugin.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 mt-4 border-t border-black/5 dark:border-white/5 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span>⭐ {plugin.rating}</span>
                <span>📥 {plugin.downloads} تنزيل</span>
              </div>
              <span className={plugin.enabled ? 'text-green-500 font-medium' : 'text-gray-400'}>
                {plugin.enabled ? '● مفعّل' : '○ معطل'}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PluginsPage;
