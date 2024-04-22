import { Toast as ToastI } from '@/app/_types/toast';

import { Toast } from './Toast';

interface ToastContainerProps {
  toasts: ToastI[];
  closeToast: (id: string) => void;
}

export const ToastContainer = ({ toasts, closeToast }: ToastContainerProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} closeToast={closeToast} />
      ))}
    </div>
  );
};
