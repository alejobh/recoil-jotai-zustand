'use client';
import { atom, useRecoilState } from 'recoil';

import { Toast, UseToast } from '@/app/_types/toast';

const toastsAtom = atom<Toast[]>({
  key: 'toasts',
  default: [],
});

export const useToast: UseToast = () => {
  const [toasts, setToasts] = useRecoilState(toastsAtom);

  const addToast = (toast: Toast) => setToasts([...toasts, toast]);

  const closeToast = (id: string) =>
    setToasts(toasts.filter((toast) => toast.id !== id));

  return {
    toasts,
    closeToast,
    addToast,
  };
};
