import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../UI/Input";
import cl from "./subscibeForm.module.css";
import Button from "../UI/Button";

function SubscribeForm({ setModalVisible, subscribe, title, description, image }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "lastname") {
      setLastname(e.target.value);
    }
  };

  const handleClick = () => {
    subscribe({ name, lastname });
  };

  return (
    <div className={cl.subscribeForm}>
      <div className={cl.header}>
        <h2>Записаться на событие</h2>
        <button className={cl.closeBtn} onClick={() => setModalVisible(false)}></button>
      </div>
      <div className={cl.subscribeEvent}>
        <div className={cl.eventImg}>
          <img src={image} alt="" />
        </div>
        <div className={cl.eventInfo}>
          <h2>{title}</h2>
          <p>{description.split(" ").slice(0, 5).join(" ") + "..."}</p>
        </div>
      </div>
      <div className={cl.formInputs}>
        <Input placeholder="Имя" name="name" onChange={handleChange} />
        <Input placeholder="Фамилия" name="lastname" onChange={handleChange} />
      </div>
      <div className={cl.footer}>
        <Button onClick={() => setModalVisible(false)}>Отмена</Button>
        <Button primary onClick={handleClick}>
          ОК
        </Button>
      </div>
    </div>
  );
}

SubscribeForm.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  subscribe: PropTypes.func.isRequired,
};

export default SubscribeForm;
