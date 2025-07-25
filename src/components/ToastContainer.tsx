import React, { useState, useEffect } from "react";
import { Toast, ToastType } from "./Toast";

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
}

let toastId = 0;
let externalAddToast: (msg: string, type: ToastType) => void = () => {};

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    externalAddToast = (message: string, type: ToastType) => {
      const id = toastId++;
      setToasts((prev) => [...prev, { id, message, type }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, 3000);
    };
  }, []);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={removeToast} />
      ))}
    </div>
  );
};

// Export for use in your app
export const showToast = (message: string, type: ToastType) => {
  externalAddToast(message, type);
};
