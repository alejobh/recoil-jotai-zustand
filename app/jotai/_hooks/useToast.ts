'use client';

import { atom, useAtom } from 'jotai';

import { Toast } from '@/app/_types/toast';

export const toastsAtom = atom<Toast[]>([]);

export const useToast = () => {
  const [toasts, setToasts] = useAtom(toastsAtom);

  const addToast = (toast: Toast) => setToasts([...toasts, toast]);

  const closeToast = (id: string) =>
    setToasts(toasts.filter((toast) => toast.id !== id));

  return { toasts: toasts, addToast, closeToast };
};
