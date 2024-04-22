'use client';

import { Toast } from '@/app/_types/toast';

import { RecoilWrapper } from '../_components/RecoilWrapper';
import { Toasts } from '@/app/_components/Toast/Toasts';
import { useToast } from './_hooks/useToast';

export const ToastContainer = ({ initial }: { initial: Toast[] }) => {
  const useToastSv = useToast(initial);

  return (
    <RecoilWrapper>
      <Toasts useToast={useToastSv} />
    </RecoilWrapper>
  );
};
