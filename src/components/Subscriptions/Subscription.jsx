import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import cl from "./subscriptions.module.css";

function Subscription({ id, title, image, description, onRemoveClick }) {
  const history = useHistory();
  return (
    <div className={cl.subscription}>
      <div className={cl.subscriptionImg}>
        <img src={image} alt={title} />
      </div>
      <div className={cl.subscriptionInfo}>
        <h3>{title}</h3>
        <p>{description.split(" ").slice(0, 5).join(" ") + "..."}</p>
      </div>
      <div className={cl.subscriptionLinks}>
        <button onClick={() => onRemoveClick(id)}>удалить</button>
        <button onClick={() => history.push(`/event/${id}`)}>перейти на страницу</button>
      </div>
    </div>
  );
}

Subscription.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

export default Subscription;
