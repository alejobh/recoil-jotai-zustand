'use client';

import { useRef } from 'react';
import { RecoilState, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

import { Toast, UseToastReturn, } from '@/app/_types/toast';
import { getEven } from '@/app/_utils/utils';

const createToastsAtom = (toasts: Toast[]) =>
  atom<Toast[]>({
    key: 'toasts',
    default: toasts,
  });

const createEvenAtom = (compareAtom: RecoilState<Toast[]>) => 
  selector<UseToastReturn['even']>({ 
    key: 'evenAtom', 
    get: ({get}) => getEven(get(compareAtom).length)
  })

export const useToast = (initial: Toast[] = []) => () => {
  const toastsAtom = useRef(createToastsAtom(initial));
  const evenAtom = useRef(createEvenAtom(toastsAtom.current));

  const [toasts, setToasts] = useRecoilState(toastsAtom.current);
  const even = useRecoilValue(evenAtom.current)

  const addToast = (toast: Toast) => setToasts([...toasts, toast]);

  const closeToast = (id: string) =>
    setToasts(toasts.filter((toast) => toast.id !== id));

  return {
    toasts,
    closeToast,
    addToast,
    even,
  };
};
