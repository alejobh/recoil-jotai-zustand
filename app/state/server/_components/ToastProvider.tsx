'use client';

import { Toast, UseToastReturn } from '@/app/_types/toast';
import { createContext, useContext, useState } from 'react';

const DEFAULT_VALUES: UseToastReturn = {
  toasts: [],
  addToast: () => {},
  closeToast: () => {},
};

export const ToastContext = createContext(DEFAULT_VALUES);

export const useToastContext = () => useContext(ToastContext);

export const ToastProvider = ({
  children,
  initialToasts,
}: {
  children: React.ReactNode;
  initialToasts: Toast[];
}) => {
  const [toasts, setToasts] = useState<Toast[]>(initialToasts);

  const closeToast = (id: string) => {
    const filteredToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(filteredToasts);
  };

  const addToast = (toast: Toast) => setToasts([...toasts, toast]);

  return (
    <ToastContext.Provider value={{ toasts, closeToast, addToast }}>
      {children}
    </ToastContext.Provider>
  );
};
