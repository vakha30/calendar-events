import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cl from "./events.module.css";

const Event = React.memo(function ({ id, title, image, date }) {
  const [dateObj, setDateObj] = useState({});
  useEffect(() => {
    const newDate = new Date(date);
    const obj = {
      month: newDate.getMonth(),
      year: newDate.getFullYear(),
    };
    setDateObj(obj);
  }, [date]);

  return (
    <div className={cl.event}>
      <h1>{title}</h1>
      <img src={image} alt="" />
      <h3>
        {dateObj.month} <span>{dateObj.year}</span>
      </h3>
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
