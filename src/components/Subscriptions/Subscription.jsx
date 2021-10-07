import React from "react";
import PropTypes from "prop-types";
import cl from "./subscriptions.module.css";

function Subscription({ id, title, image, description }) {
  return (
    <div>
      {title}
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  );
}

Subscription.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Subscription;
