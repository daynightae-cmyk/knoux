"use client"

import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { HelpCircle, BookOpen, Terminal, Shield, MessageCircle, ExternalLink, ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    category: 'عام',
    question: 'ما هو نظام KnouxCore؟',
    answer: 'KnouxCore هو مركز ذكي متقدم لإدارة العمليات، مراقبة الشبكات، تتبع التحميلات، والتحكم في الخدمات مع واجهة تفاعلية ذات طابع فضائي مستقبلي.'
  },
  {
    category: 'الخدمات',
    question: 'كيف يمكنني تفعيل أو إيقاف خدمة معينة؟',
    answer: 'يمكنك الانتقال إلى صفحة "الخدمات" من القائمة الجانبية، واختيار الخدمة المطلوبة للاطلاع على تفاصيلها والتحكم في حالتها ومتابعة مقاييس الأداء الحية.'
  },
  {
    category: 'التحميلات',
    question: 'كيف تتم إدارة عمليات التنزيل في KnouxCore؟',
    answer: 'من خلال صفحة "التحميلات"، يمكنك متابعة حالة العمليات الجارية، إيقافها مؤقتاً أو استئنافها، والاطلاع على السرعة وحجم البيانات المتبقي.'
  },
  {
    category: 'الأمان',
    question: 'ما هي مستويات الحماية المتوفرة؟',
    answer: 'يوفر النظام جدار حماية نشط، فحص دوري للتهديدات، سجل تدقيق شامل لجميع العمليات (Audit Log)، ونظام مصادقة متعدد المستويات.'
  },
  {
    category: 'الذكاء الاصطناعي',
    question: 'كيف يعمل محرك الرؤى الذكية AI Insights؟',
    answer: 'يحلل محرك الرؤى الذكية نشاط النظام وسجلات الأداء لتقديم توصيات فورية واستجابات آلية للمساعدة في تحسين أداء المهام.'
  }
];

export const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');

  const categories = ['الكل', 'عام', 'الخدمات', 'التحميلات', 'الأمان', 'الذكاء الاصطناعي'];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = selectedCategory === 'الكل' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center p-3 bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 rounded-2xl mb-2">
          <HelpCircle className="h-10 w-10" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">مركز المساعدة والدعم</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          دليل الاستخدام الشامل والأسئلة الشائعة لنظام التحكم الفضائي الذكي KnouxCore
        </p>
      </div>

      {/* Quick Search */}
      <div className="max-w-xl mx-auto relative">
        <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="ابحث في دليل المساعدة والأسئلة الشائعة..."
          className="w-full pr-12 pl-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
        />
      </div>

      {/* Feature Guide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-500">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">دليل البدء السريع</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            تعرف على أساسيات لوحة التحكم، تهيئة واجهات المراقبة، وتفعيل الإشعارات اللحظية.
          </p>
          <span className="text-xs font-semibold text-cyan-500">جاهز للتشغيل</span>
        </Card>

        <Card className="p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-500">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">أوامر التحكم السريع</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            استكشف مفاتيح الاختصار وأوامر التنقل السريع بين الوحدات المركزية وسجلات النظام.
          </p>
          <span className="text-xs font-semibold text-purple-500">Ctrl + Shift + K</span>
        </Card>

        <Card className="p-6 border border-green-500/20 hover:border-green-500/40 transition-all">
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
            <div className="p-2.5 rounded-lg bg-green-500/10 text-green-500">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">إرشادات الأمان</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            أفضل الممارسات لضبط أذونات الوصول وحماية تدفق البيانات بين العقد المتصلة.
          </p>
          <span className="text-xs font-semibold text-green-500">حماية مشفرة</span>
        </Card>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedCategory === category
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2 rtl:space-x-reverse">
          <MessageCircle className="h-6 w-6 text-cyan-500" />
          <span>الأسئلة الشائعة</span>
        </h2>

        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className="border border-black/10 dark:border-white/10 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full p-4 flex items-center justify-between text-right hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-base">{faq.question}</span>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 shrink-0 mr-2 rtl:ml-2 rtl:mr-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 shrink-0 mr-2 rtl:ml-2 rtl:mr-0" />
                  )}
                </button>
                {isExpanded && (
                  <div className="p-4 pt-0 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-black/5 dark:border-white/5 mt-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default HelpPage;
