'use client';

import { proxy, useSnapshot } from 'valtio';

import { Toast, UseToastReturn } from '@/app/_types/toast';
import { getEven } from '@/app/_utils/utils';

const state = proxy<UseToastReturn>({
  toasts: [], 
  addToast: (toast: Toast) => {
    state.toasts = [...state.toasts, toast]
  },
  closeToast: (id: string) =>{
    state.toasts = state.toasts.filter((toast) => toast.id !== id);
  },
  get even() {
    return getEven(this.toasts.length)
  }
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
      even: toastState.even,
    } as UseToastReturn
  }

  return useImplementation;
} 
