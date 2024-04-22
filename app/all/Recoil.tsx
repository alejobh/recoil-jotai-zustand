'use client';

import { useRef } from 'react';

import { Toasts } from '../_components/Toast/Toasts';
import { useToast } from '../recoil/_hooks/useToast';

export const Recoil = () => {
  const useToasts = useRef(useToast());

  return <Toasts title="Recoil" useToast={useToasts.current} />
};
