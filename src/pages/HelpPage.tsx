"use client"

import React, { useState } from 'react';
import { Card } from "@/src/components/ui/card";
import { HelpCircle, BookOpen, MessageSquare, ExternalLink, ChevronDown, ChevronUp, Terminal, Shield, Zap } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    question: 'كيف يمكنني بدء عملية تحميل جديدة؟',
    answer: 'انتقل إلى صفحة عمليات التحميل (Download Ops) من القائمة الجانبية، ثم انقر على زر "تحميل جديد" وأدخل رابط الملف المطلوب تحميله.',
  },
  {
    question: 'ما هي ميزة الرؤى الذكية (AI Insights)؟',
    answer: 'نواة KnouxAI تقدم تحليلات فورية لأداء النظام والشبكة وتقترح توصيات ذكية لتحسين السرعة وحل المشكلات المحتملة.',
  },
  {
    question: 'كيف يمكنني تغيير لغة النظام ومظهره؟',
    answer: 'يمكنك التبديل بين المظهر الفاتح والداكن وتغيير لغة الواجهة بين العربية والإنجليزية من صفحة "إعدادات النظام".',
  },
  {
    question: 'هل يتم تشفير وحماية بيانات الاتصال؟',
    answer: 'نعم، يوفر KnouxCore طبقات متعددة من المراقبة الأمنية وفحص الروابط ونظام تدقيق شامل لجميع الأنشطة.',
  },
];

const HelpPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex p-3 rounded-full bg-purple-500/10 text-purple-400 mb-4">
          <HelpCircle className="h-10 w-10" />
        </div>
        <h1 className="text-4xl font-bold mb-3">المساعدة والدعم الفني</h1>
        <p className="text-gray-600 dark:text-gray-300">
          دليلك الشامل لاستخدام منصة KnouxCore والتحكم بجميع الخدمات والعمليات
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 text-center hover:border-purple-500/50 transition-colors">
          <BookOpen className="h-8 w-8 mx-auto mb-4 text-purple-500" />
          <h3 className="text-xl font-semibold mb-2">دليل المستخدم</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            تعرف على جميع الميزات وكيفية تكوين وتخصيص إعدادات التحكم
          </p>
          <button className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline inline-flex items-center gap-1">
            قراءة الدليل <ExternalLink className="h-4 w-4" />
          </button>
        </Card>

        <Card className="p-6 text-center hover:border-blue-500/50 transition-colors">
          <Terminal className="h-8 w-8 mx-auto mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">أوامر التحكم</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            قائمة الأوامر السريعة والاختصارات لتسريع إدارة العمليات
          </p>
          <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1">
            عرض الأوامر <ExternalLink className="h-4 w-4" />
          </button>
        </Card>

        <Card className="p-6 text-center hover:border-green-500/50 transition-colors">
          <MessageSquare className="h-8 w-8 mx-auto mb-4 text-green-500" />
          <h3 className="text-xl font-semibold mb-2">المساعد الذكي</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            استعن بنواة KnouxAI للحصول على إجابات فورية وتحليلات مباشرة
          </p>
          <button className="text-sm font-medium text-green-600 dark:text-green-400 hover:underline inline-flex items-center gap-1">
            بدء المحادثة <ExternalLink className="h-4 w-4" />
          </button>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">الأسئلة الشائعة (FAQ)</h2>
        <div className="space-y-4">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-black/10 dark:border-white/10 rounded-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-right"
                >
                  <span className="font-semibold text-base">{faq.question}</span>
                  {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
                {isOpen && (
                  <div className="p-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-black/5 dark:border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 flex items-start gap-4">
          <div className="p-3 bg-yellow-500/10 text-yellow-500 rounded-lg shrink-0">
            <Zap className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">تسريع الأداء</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              تأكد من ضبط عدد التنزيلات المتزامنة بما يتناسب مع سرعة الاتصال لديك من صفحة الإعدادات.
            </p>
          </div>
        </Card>

        <Card className="p-6 flex items-start gap-4">
          <div className="p-3 bg-red-500/10 text-red-500 rounded-lg shrink-0">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">الأمان والخصوصية</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              جميع السجلات والبيانات الحساسة تخضع لمراجعة الأمان المستمرة وتخزن وفق أفضل الممارسات.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HelpPage;
