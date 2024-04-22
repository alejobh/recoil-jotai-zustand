'use client';

import { Toast } from '@/app/_types/toast';
import { RecoilRoot } from 'recoil';

export const RecoilWrapper = ({ children }: { children: React.ReactNode }) => (
  <RecoilRoot>{children}</RecoilRoot>
);
