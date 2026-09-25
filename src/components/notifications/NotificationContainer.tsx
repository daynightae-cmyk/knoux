import React from 'react';
import { useNotification } from '@/src/contexts/NotificationContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const NotificationContainer: React.FC = () => {
  const notificationContext = useNotification();
  if (!notificationContext) return null;

  const { notifications, removeNotification } = notificationContext;

  if (!notifications || notifications.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2 max-w-sm w-full pointer-events-none">
      {notifications.map((n) => (
        <div
          key={n.id}
          className={`pointer-events-auto flex items-center justify-between p-4 rounded-lg shadow-lg border backdrop-blur-md transition-all duration-300 ${
            n.type === 'success'
              ? 'bg-green-500/10 border-green-500/30 text-green-400'
              : n.type === 'error'
              ? 'bg-red-500/10 border-red-500/30 text-red-400'
              : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
          }`}
        >
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            {n.type === 'success' && <CheckCircle2 className="h-5 w-5 shrink-0" />}
            {n.type === 'error' && <AlertCircle className="h-5 w-5 shrink-0" />}
            {n.type === 'info' && <Info className="h-5 w-5 shrink-0" />}
            <span className="text-sm font-medium">{n.message}</span>
          </div>
          <button
            onClick={() => removeNotification(n.id)}
            className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationContainer;
