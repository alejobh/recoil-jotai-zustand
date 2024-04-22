'use client';

import { useHydrateAtoms } from 'jotai/utils';

import { Toast } from '@/app/_types/toast';
import { Toasts } from '@/app/_components/Toast/Toasts';

import { toastsAtom, useToast } from '../_hooks/useToast';

export const JotaiWrapper = ({ toasts }: { toasts: Toast[] }) => {
  useHydrateAtoms(new Map([[toastsAtom, toasts]]));

  return <Toasts useToast={useToast} />;
};
