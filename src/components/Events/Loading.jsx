import React from "react";
import EventLoader from "../UI/EventLoader";
import cl from "./events.module.css";

function Loading() {
  return (
    <div className={cl.events}>
      {[1, 2, 3, 4].map((i) => {
        return <EventLoader key={i} />;
      })}
    </div>
  );
}
export default Loading;
