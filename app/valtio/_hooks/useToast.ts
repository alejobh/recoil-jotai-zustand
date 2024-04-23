'use client';

import { proxy, useSnapshot } from 'valtio';

import { Toast, UseToastReturn } from '@/app/_types/toast';

const state = proxy<UseToastReturn>({
  toasts: [], 
  addToast: (toast: Toast) => {
    state.toasts = [...state.toasts, toast]
  },
  closeToast: (id: string) =>{
    state.toasts = state.toasts.filter((toast) => toast.id !== id);
  },
});

export const useToast = (initial: Toast[] = []) => {
  if(initial) {
    state.toasts = initial;
  }

  const useImplementation = () => {
    const toastState = useSnapshot(state);

    return {
      toasts: toastState.toasts,
      closeToast: toastState.closeToast,
      addToast: toastState.addToast,
    } as UseToastReturn
  }

  return useImplementation;
} 
