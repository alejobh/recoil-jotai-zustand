'use client';

import { useRef } from 'react';

import { Toasts } from '../_components/Toast/Toasts';
import { Toast } from '../_types/toast';
import { useToast } from './_hooks/useToast';

export const ToastContainer = ({ initial = [] }: { initial?: Toast[] }) => {
  const useToastRef = useRef(useToast(initial));

  return <Toasts useToast={useToastRef.current} />;
};
