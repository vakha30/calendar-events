import React from "react";
import { useSelector } from "react-redux";
import { selectDate } from "../../redux/features/date";
import cl from "./events.module.css";
import Event from "./Event";
import { selectEventsByDate } from "../../redux/features/events";

function Events() {
  const date = useSelector(selectDate);

  const events = useSelector(selectEventsByDate(date));

  if (events.length === 0) {
    return <h1>Пусто</h1>;
  }

  return (
    <div className={cl.events}>
      {events.map((event) => {
        return <Event key={event.id} {...event} />;
      })}
    </div>
  );
}

export default Events;
