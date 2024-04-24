'use client';

import { useRef } from 'react';
import { create } from 'zustand';

import { Toast, UseToastReturn } from '@/app/_types/toast';
import { getEven } from '@/app/_utils/utils';


const createToastStore = (initial: Toast[]) => create<Omit<UseToastReturn, 'even'>>(set => ({
  toasts: initial,
  addToast: (toast) => set((state) => ({ toasts: [...state.toasts, toast] })),
  closeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
  }))

export const useToast = (initial: Toast[] = []) => () => {
  const useStore = useRef(createToastStore(initial));
  const {toasts, addToast, closeToast} = useStore.current();
  const even = getEven(toasts.length)

  return {toasts, addToast, closeToast, even}
};
