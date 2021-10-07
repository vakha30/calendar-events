import React from "react";

import cl from "./modal.module.css";

const Modal = ({ children, setVisible }) => {
  return (
    <div className={cl.modal} onClick={() => setVisible(false)}>
      <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
