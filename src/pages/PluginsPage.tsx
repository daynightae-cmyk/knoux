"use client"

import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Puzzle, ShieldCheck, Zap, Globe, Gauge, Cpu, Check, Power, RefreshCw, Search } from 'lucide-react';

interface PluginItem {
  id: string;
  name: string;
  category: string;
  description: string;
  version: string;
  author: string;
  enabled: boolean;
  icon: React.ElementType;
}

const INITIAL_PLUGINS: PluginItem[] = [
  {
    id: '1',
    name: 'مسرع التنزيل الفضائي (Quantum Download Booster)',
    category: 'التحميلات',
    description: 'تحسين سرعة التدفق وتجزئة حزم البيانات عبر بروتوكولات اتصال متعددة القنوات.',
    version: '2.4.0',
    author: 'Knoux Systems',
    enabled: true,
    icon: Zap,
  },
  {
    id: '2',
    name: 'درع الحماية السحابي (Sentinel AI Firewall)',
    category: 'الأمان',
    description: 'رصد الهجمات وفحص الحزم الواردة في الوقت الفعلي مع عزل آلي للروابط المشبوهة.',
    version: '3.1.2',
    author: 'CyberGuard Lab',
    enabled: true,
    icon: ShieldCheck,
  },
  {
    id: '3',
    name: 'محلل حركة المرور والشبكات (NetPulse Monitor)',
    category: 'الشبكة',
    description: 'عرض الرسوم البيانية اللحظية لتوزيع الباندويث وحساب معدلات التأخير (Latency).',
    version: '1.8.5',
    author: 'KnouxCore Core Team',
    enabled: false,
    icon: Gauge,
  },
  {
    id: '4',
    name: 'محرك المعالجة الموزعة (Neural Worker Core)',
    category: 'الذكاء الاصطناعي',
    description: 'تسريع الاستجابة للنماذج الذكية وتوليد التحليلات التنبؤية في الخلفية.',
    version: '1.0.4',
    author: 'DeepCosmos AI',
    enabled: true,
    icon: Cpu,
  },
  {
    id: '5',
    name: 'مترجم البروتوكولات العالمية (OmniGateway)',
    category: 'الربط والتكامل',
    description: 'تسهيل الاتصال مع واجهات برمجة التطبيقات الخارجية وتبادل البيانات القياسية.',
    version: '2.0.1',
    author: 'Global Mesh Org',
    enabled: false,
    icon: Globe,
  },
];

export const PluginsPage: React.FC = () => {
  const [plugins, setPlugins] = useState<PluginItem[]>(INITIAL_PLUGINS);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('الكل');

  const categories = ['الكل', 'التحميلات', 'الأمان', 'الشبكة', 'الذكاء الاصطناعي', 'الربط والتكامل'];

  const togglePlugin = (id: string) => {
    setPlugins(prev =>
      prev.map(p => (p.id === id ? { ...p, enabled: !p.enabled } : p))
    );
  };

  const filtered = plugins.filter(p => {
    const matchCategory = filterCategory === 'الكل' || p.category === filterCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                        p.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold flex items-center space-x-3 rtl:space-x-reverse">
            <Puzzle className="h-9 w-9 text-cyan-500" />
            <span>مدير الملحقات والإضافات</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            توسيع إمكانيات KnouxCore عبر وحدات تشغيل برمجية متخصصة
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setPlugins(INITIAL_PLUGINS)}
            className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 border rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all text-sm"
          >
            <RefreshCw className="h-4 w-4" />
            <span>إعادة التعيين</span>
          </button>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute right-3.5 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث عن إضافة..."
            className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilterCategory(c)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterCategory === c
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Plugins Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((plugin) => {
          const Icon = plugin.icon;
          return (
            <Card key={plugin.id} className="p-6 flex flex-col justify-between hover:shadow-lg transition-all border border-black/10 dark:border-white/10">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 text-cyan-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    plugin.enabled 
                      ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                      : 'bg-gray-500/10 text-gray-500 border border-gray-500/20'
                  }`}>
                    {plugin.enabled ? 'مفعل' : 'معطل'}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-1">{plugin.name}</h3>
                <p className="text-xs text-gray-400 mb-3">{plugin.category} • v{plugin.version}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-6">
                  {plugin.description}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-400">{plugin.author}</span>
                <button
                  onClick={() => togglePlugin(plugin.id)}
                  className={`flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    plugin.enabled
                      ? 'bg-red-500/10 text-red-500 hover:bg-red-500/20'
                      : 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
                  }`}
                >
                  <Power className="h-3.5 w-3.5" />
                  <span>{plugin.enabled ? 'إيقاف' : 'تفعيل'}</span>
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PluginsPage;
