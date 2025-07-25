import React from "react";
import "./toast.css";

export type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
  id: number;
  message: string;
  type: ToastType;
  onClose: (id: number) => void;
}

export const Toast: React.FC<ToastProps> = ({ id, message, type, onClose }) => {
  return (
    <div className={`toast ${type}`}>
      <span>{message}</span>
      <button onClick={() => onClose(id)}>×</button>
    </div>
  );
};
