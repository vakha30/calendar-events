import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import removeIcon from "../../assets/img/remove.svg";
import cl from "./subscriptions.module.css";

const Subscription = React.memo(function ({ id, title, image, description, onRemoveClick }) {
  const history = useHistory();
  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });

  return (
    <div className={cl.subscription} onClick={() => isMobile && history.push(`/event/${id}`)}>
      <div className={cl.subscriptionImg}>
        <img src={image} alt={title} />
      </div>
      <div className={cl.subscriptionInfo}>
        <h3>{title}</h3>
        <p>{description.split(" ").slice(0, 5).join(" ") + "..."}</p>
      </div>
      <div className={cl.subscriptionLinks}>
        {isMobile ? (
          <button
            className={cl.removeMobileBtn}
            onClick={(e) => {
              e.stopPropagation();
              onRemoveClick(id);
            }}
          >
            <img src={removeIcon} alt="" />
          </button>
        ) : (
          <>
            <button onClick={() => onRemoveClick(id)}>удалить</button>
            <button onClick={() => history.push(`/event/${id}`)}>перейти на страницу</button>
          </>
        )}
      </div>
    </div>
  );
});

Subscription.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

export default Subscription;
