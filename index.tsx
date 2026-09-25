import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { DownloadProvider } from '@/contexts/DownloadContext';
import { NotificationProvider } from '@/contexts/NotificationContext';
import { SystemSettingsProvider } from '@/contexts/SystemSettingsContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider> 
        <SystemSettingsProvider>
          <NotificationProvider>
            <DownloadProvider>
              <App />
            </DownloadProvider>
          </NotificationProvider>
        </SystemSettingsProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
