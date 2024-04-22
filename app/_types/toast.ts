export interface Toast {
  id: string;
  text: string;
}
export interface UseToastReturn {
  toasts: Toast[];
  closeToast: (id: string) => void;
  addToast: (toast: Toast) => void;
}

export type UseToast = () => UseToastReturn;
