'use client';

import { atom, useAtom } from 'jotai';

import { Toast } from '@/app/_types/toast';
import { getEven } from '@/app/_utils/utils';

export const toastsAtom = atom<Toast[]>([]);
export const isEvenAtom = atom<ReturnType<typeof getEven>>((get) => getEven(get(toastsAtom).length))

export const useToast = () => {
  const [toasts, setToasts] = useAtom(toastsAtom);
  const even = useAtom(isEvenAtom)

  const addToast = (toast: Toast) => setToasts([...toasts, toast]);

  const closeToast = (id: string) =>
    setToasts(toasts.filter((toast) => toast.id !== id));

  return { toasts: toasts, addToast, closeToast, even };
};
