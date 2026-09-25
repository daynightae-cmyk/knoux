import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TopBar from '@/components/layout/TopBar';
import Sidebar from '@/components/layout/Sidebar';
import DashboardPage from '@/pages/DashboardPage';
import DownloadOpsPage from '@/pages/DownloadOpsPage';
import NetworkControlPage from '@/pages/NetworkControlPage';
import SecurityHubPage from '@/pages/SecurityHubPage';
import ServicesPage from '@/app/services/page';
import SystemSettingsPage from '@/pages/SystemSettingsPage';
import AboutPage from '@/pages/AboutPage';
import AuditLogPage from '@/pages/AuditLogPage'; 
import PluginsPage from '@/pages/PluginsPage';   
import HelpPage from '@/pages/HelpPage';  
import AIInsightsPage from '@/pages/AIInsightsPage';
import { ThemeContext } from '@/contexts/ThemeContext';
import { useSystemSettings } from '@/contexts/SystemSettingsContext'; 
import NotificationContainer from '@/components/notifications/NotificationContainer';
import { Language } from './types';

const App: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || 'dark';
  
  let systemSettings: { language?: string; userRole?: string } = { language: 'ar', userRole: 'admin' };
  try {
    const hookResult = useSystemSettings();
    if (hookResult?.settings) {
      systemSettings = hookResult.settings;
    }
  } catch {
    // fallback if context not wrapped
  }

  const [particles, setParticles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    document.documentElement.className = theme;
    if (systemSettings.language) {
      document.documentElement.lang = systemSettings.language;
      document.documentElement.dir = systemSettings.language === Language.Arabic || systemSettings.language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [theme, systemSettings.language]);
  
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        const size = Math.random() * 3 + 1; 
        const animationDuration = Math.random() * 10 + 15; 
        const animationDelay = Math.random() * 10;
        const initialLeft = Math.random() * 100;

        newParticles.push(
          <div
            key={i}
            className="particle pointer-events-none"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${initialLeft}%`, 
              top: `${Math.random() * 100 + 100}%`, 
              animationDuration: `${animationDuration}s`,
              animationDelay: `${animationDelay}s`,
              background: theme === 'light' ? 'rgba(119, 0, 255, 0.3)' : 'rgba(0, 255, 213, 0.3)',
              boxShadow: theme === 'light' ? '0 0 5px rgba(119, 0, 255, 0.5)' : '0 0 5px rgba(0, 255, 213, 0.5)',
            }}
          />
        );
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, [theme, systemSettings.language]);

  return (
    <div className={`flex h-screen overflow-hidden ${theme === 'light' ? 'bg-[#F0F2F8] text-slate-800' : 'bg-[#0A0B1A] text-slate-200'} transition-colors duration-500`}>
      {particles}
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 relative">
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/ai-insights" element={<AIInsightsPage />} />
              <Route path="/downloads" element={<DownloadOpsPage />} />
              <Route path="/network" element={<NetworkControlPage />} />
              <Route path="/security" element={<SecurityHubPage />} />
              <Route path="/auditlog" element={<AuditLogPage />} />
              <Route path="/plugins" element={<PluginsPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/settings" element={<SystemSettingsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </main>
        <NotificationContainer />
      </div>
    </div>
  );
};

export default App;
