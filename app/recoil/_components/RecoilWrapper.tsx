'use client';

import { RecoilRoot } from 'recoil';

export const RecoilWrapper = ({ children }: { children: React.ReactNode }) => (
  <RecoilRoot>{children}</RecoilRoot>
);
