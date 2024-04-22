'use client';

import { create } from 'zustand';

import { Toast, UseToastReturn } from '@/app/_types/toast';

export const useToast = (initial: Toast[] = []) =>
  create<UseToastReturn>((set) => ({
    toasts: initial,
    addToast: (toast) => set((state) => ({ toasts: [...state.toasts, toast] })),
    closeToast: (id) =>
      set((state) => ({
        toasts: state.toasts.filter((toast) => toast.id !== id),
      })),
  }));
