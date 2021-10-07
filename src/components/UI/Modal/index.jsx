import React from "react";
import PropTypes from "prop-types";
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

Modal.propTypes = {
  setVisible: PropTypes.func.isRequired,
};

export default Modal;
