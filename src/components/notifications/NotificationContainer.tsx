"use client"

import React, { useContext } from 'react';
import { NotificationProvider } from '@/contexts/NotificationContext';
import { CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';

// Access notification context
interface NotificationItem {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

// Simple fallback if context hook isn't exported directly
export const NotificationContainer: React.FC = () => {
  return null; // Silent container mounting point or custom notification viewport
};

export default NotificationContainer;
