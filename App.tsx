
import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TopBar from './src/components/layout/TopBar';
import Sidebar from './src/components/layout/Sidebar';
import DashboardPage from './src/pages/DashboardPage';
import DownloadOpsPage from './src/pages/DownloadOpsPage';
import NetworkControlPage from './src/pages/NetworkControlPage';
import SecurityHubPage from './src/pages/SecurityHubPage';
import ServicesPage from './src/app/services/page';
import SystemSettingsPage from './src/pages/SystemSettingsPage';
import AboutPage from './src/pages/AboutPage';
import AuditLogPage from './src/pages/AuditLogPage'; 
import PluginsPage from './src/pages/PluginsPage';   
import HelpPage from './src/pages/HelpPage';  
import AIInsightsPage from './src/pages/AIInsightsPage'; // New AI Insights Page
// KnouxConduitCore is used within DownloadOpsPage
import { ThemeContext } from './src/contexts/ThemeContext';
import { useSystemSettings } from './src/contexts/SystemSettingsContext'; 
import NotificationContainer from './src/components/notifications/NotificationContainer';
import { Language } from './types';

const App: React.FC = () => {
  const themeContext = useContext(ThemeContext); // For visual theme
  const theme = themeContext?.theme || 'dark';
  const systemSettingsContextHook = useSystemSettings(); // Use hook

  const [particles, setParticles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    document.documentElement.className = theme; // For light/dark visual theme
    if (systemSettingsContextHook) { // For language direction
      document.documentElement.lang = systemSettingsContextHook.settings.language;
      document.documentElement.dir = systemSettingsContextHook.settings.language === Language.Arabic ? 'rtl' : 'ltr';
    }
  }, [theme, systemSettingsContextHook?.settings.language]);
  
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      // const isRTL = systemSettingsContextHook?.settings.language === Language.Arabic; // Not directly needed for animation logic
      for (let i = 0; i < 20; i++) {
        const size = Math.random() * 3 + 1; 
        const animationDuration = Math.random() * 10 + 15; 
        const animationDelay = Math.random() * 10;
        const initialLeft = Math.random() * 100;

        newParticles.push(
          <div
            key={i}
            className="particle" // CSS for this is in index.html
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
  }, [theme, systemSettingsContextHook?.settings.language]);


  if (!systemSettingsContextHook) {
    return <div>Loading settings...</div>; 
  }
  const { settings } = systemSettingsContextHook;

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
              <Route path="/downloads" element={<DownloadOpsPage />} />
              <Route path="/ai-insights" element={<AIInsightsPage />} />
              <Route path="/network" element={<NetworkControlPage />} />
              <Route path="/security" element={<SecurityHubPage />} />
              <Route path="/services" element={<ServicesPage />} />
              {settings.userRole === 'admin' && <Route path="/auditlog" element={<AuditLogPage />} />}
              <Route path="/plugins" element={<PluginsPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/settings" element={<SystemSettingsPage />} />
              <Route path="/about" element={<AboutPage />} />
              {/* Fallback for admin route if user is not admin */}
              {settings.userRole !== 'admin' && <Route path="/auditlog" element={<Navigate to="/dashboard" replace />} />}
            </Routes>
          </div>
        </main>
        <NotificationContainer />
      </div>
    </div>
  );
};

export default App;