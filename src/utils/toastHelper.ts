import { toast } from 'react-toastify';
export type ToastStatus = 'success' | 'error' | 'info' | 'warning';

export const showToast = (message: string, status: ToastStatus): void => {
  switch (status) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'info':
      toast.info(message);
      break;
    case 'warning':
      toast.warn(message);
      break;
    default:
      toast(message);
      break;
  }
};

export const showSuccessToast = (message: string): void => {
  toast.success(message);
};

export const showErrorToast = (message: string): void => {
  toast.error(message);
};

export const showInfoToast = (message: string): void => {
  toast.info(message);
};

export const showWarningToast = (message: string): void => {
  toast.warn(message);
};