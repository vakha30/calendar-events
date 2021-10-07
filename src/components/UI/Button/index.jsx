import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import cl from "./button.module.css";

function Button({ children, onClick, primary, danger, arrow }) {
  return (
    <button
      className={classNames(cl.default, {
        [cl.primary]: primary,
        [cl.danger]: danger,
        [cl.arrow]: arrow,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  arrow: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  danger: false,
  arrow: false,
};

export default Button;
