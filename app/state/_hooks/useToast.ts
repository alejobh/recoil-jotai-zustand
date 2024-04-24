'use client';

import { useState } from 'react';

import { Toast, UseToast } from '@/app/_types/toast';
import { getEven } from '@/app/_utils/utils';

export const useToast: UseToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const closeToast = (id: string) => {
    const filteredToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(filteredToasts);
  };

  const addToast = (toast: Toast) => setToasts([...toasts, toast]);

  return { toasts, closeToast, addToast, even: getEven(toasts.length) };
};
