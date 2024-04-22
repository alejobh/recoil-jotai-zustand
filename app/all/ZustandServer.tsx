'use client';

import { useRef } from "react";

import { Toasts } from "../_components/Toast/Toasts"
import { useToast } from "../zustand/_hooks/useToast";

export const ZustandServer = () => {
  const useToastZustand = useRef(useToast())

  return <Toasts title="Zustand" useToast={useToastZustand.current} />
}
