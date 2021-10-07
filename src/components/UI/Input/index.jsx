import React from "react";
import cl from "./input.module.css";

const Input = (props) => {
  return <input className={cl.input} {...props}></input>;
};

export default Input;
