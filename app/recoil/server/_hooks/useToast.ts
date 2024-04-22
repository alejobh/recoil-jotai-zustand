'use client';

import { atom, useRecoilState } from 'recoil';

import { Toast, UseToast, UseToastReturn } from '@/app/_types/toast';

const createToastsAtom = (toasts: Toast[]) =>
  atom<Toast[]>({
    key: 'toastsServer',
    default: toasts,
  });

export const useToast = (initial: Toast[]) => () => {
  const toastsAtom = createToastsAtom(initial);
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
