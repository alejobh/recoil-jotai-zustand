'use client';

import { useRef } from 'react';

import { Toasts } from '../_components/Toast/Toasts';
import { useToast } from '../valtio/_hooks/useToast';

export const Valtio = () => {
  const useToasts = useRef(useToast());

  return <Toasts title="Valtio" useToast={useToasts.current} />
};
