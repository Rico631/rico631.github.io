import React, { useState } from "react";
import "./Modal.css";

export interface ModalProps {
  onClose: () => void;
  canClose?: () => boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, canClose, children }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    if (canClose && !canClose()) {
      return;
    }
    setVisible(false);
    onClose();
  };

  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
