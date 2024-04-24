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
  const { addToast, toasts, closeToast, even } = useToast();

  return (
    <div className="flex flex-col items-center justify-start">
      {title && <h3 className="text-semibold mb-3 text-center text-xl">{title}</h3>}
      <p className="mb-3 text-center text-lg">{even} {`(${toasts.length})`}</p>
      <AddToast addToast={addToast} toasts={toasts} />
      <ToastContainer toasts={toasts} closeToast={closeToast} />
    </div>
  );
};
