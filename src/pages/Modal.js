import React from "react";
import "../App.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-black rounded-md shadow-md p-6">
        {children}
      </div>
    </div>
  );
};

export { Modal };

