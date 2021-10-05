import React from "react";
import { useSelector } from "react-redux";
import cl from "./events.module.css";
import Event from "./Event";
import { selectAllEvents } from "../../redux/features/events";

function Events() {
  const events = useSelector(selectAllEvents);
  return (
    <div className={cl.events}>
      {events.map((event) => {
        return <Event key={event.id} {...event} />;
      })}
    </div>
  );
}

export default Events;
