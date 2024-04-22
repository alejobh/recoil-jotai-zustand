'use client';

import { useRef } from 'react';
import { atom, useRecoilState } from 'recoil';

import { Toast, } from '@/app/_types/toast';

const createToastsAtom = (toasts: Toast[]) =>
  atom<Toast[]>({
    key: 'toasts',
    default: toasts,
  });

export const useToast = (initial: Toast[] = []) => () => {
  const toastsAtom = useRef(createToastsAtom(initial));
  const [toasts, setToasts] = useRecoilState(toastsAtom.current);

  const addToast = (toast: Toast) => setToasts([...toasts, toast]);

  const closeToast = (id: string) =>
    setToasts(toasts.filter((toast) => toast.id !== id));

  return {
    toasts,
    closeToast,
    addToast,
  };
};
