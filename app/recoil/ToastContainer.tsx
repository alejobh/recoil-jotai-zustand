'use client';

import { useRef } from 'react';

import { Toast } from '@/app/_types/toast';
import { Toasts } from '@/app/_components/Toast/Toasts';

import { RecoilWrapper } from './_components/RecoilWrapper';
import { useToast } from './_hooks/useToast';

export const ToastContainer = ({ initial = [] }: { initial?: Toast[] }) => {
  const useToasts = useRef(useToast(initial));

  return (
    <RecoilWrapper>
      <Toasts useToast={useToasts.current} />
    </RecoilWrapper>
  );
};
