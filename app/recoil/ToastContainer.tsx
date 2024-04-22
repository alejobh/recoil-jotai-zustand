'use client';

import { useRef } from 'react';

import { Toast } from '@/app/_types/toast';
import { Toasts } from '@/app/_components/Toast/Toasts';

import { useToast } from './_hooks/useToast';

export const ToastContainer = ({ initial = [] }: { initial?: Toast[] }) => {
  const useToasts = useRef(useToast(initial));

  return (
    <Toasts useToast={useToasts.current} />
  );
};
