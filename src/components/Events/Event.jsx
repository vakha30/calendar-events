import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cl from "./events.module.css";
import { Link } from "react-router-dom";

const Event = React.memo(function ({ id, title, image, date }) {
  const [formatDate, setFormatDate] = useState("");

  useEffect(() => {
    const newDate = new Date(date);
    setFormatDate(newDate.toLocaleDateString());
  }, [date]);

  return (
    <div className={cl.event}>
      <div className={cl.eventHeader}>
        <h3>{title.substr(0, 10)}</h3>
        <Link to={`/event/${id}`}>Больше</Link>
      </div>
      <div className={cl.eventImg}>
        <img src={image} alt={title} />
      </div>
      <div className={cl.eventDate}>{formatDate}</div>
    </div>
  );
});

Event.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
};

Event.defaultProps = {
  title: "----",
  date: "unknow",
  image: "https://proff-termo.ru/wp-content/themes/consultix/images/no-image-found-360x260.png",
};

export default Event;
