'use client';

import { AddToast } from '@/app/_components/Toast/AddToast';
import { ToastContainer } from '@/app/_components/Toast/ToastContainer';
import { UseToast } from '@/app/_types/toast';

export const Toasts = ({
  useToast,
  title,
}: {
  useToast: UseToast;
  title?: string;
}) => {
  const { addToast, toasts, closeToast } = useToast();

  return (
    <div className="flex flex-col items-center justify-start">
      {title && <h3 className="text-semibold mb-3 text-center">{title}</h3>}
      <AddToast addToast={addToast} toasts={toasts} />
      <ToastContainer toasts={toasts} closeToast={closeToast} />
    </div>
  );
};