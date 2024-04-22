'use client';

import { useRef } from 'react';
import { Toasts } from "../_components/Toast/Toasts";
import { RecoilWrapper } from "../recoil/_components/RecoilWrapper";
import { useToast } from "../recoil/_hooks/useToast";

export const Recoil = () => {
  const useToasts = useRef(useToast());

  return (
    <RecoilWrapper>
      <Toasts title="Recoil" useToast={useToasts.current} />
    </RecoilWrapper>
  );
}
