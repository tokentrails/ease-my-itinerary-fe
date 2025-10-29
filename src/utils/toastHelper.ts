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