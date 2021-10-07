import React from "react";
import { useSelector } from "react-redux";
import Subscription from "./Subscription";
import { selectSubscriptions } from "../../redux/features/subsriptions";
import cl from "./subscriptions.module.css";

function Subscriptions() {
  const subscriptions = useSelector(selectSubscriptions);

  return (
    <div className={cl.subscriptions}>
      {subscriptions && subscriptions.map((item) => <Subscription key={item.id} {...item} />)}
    </div>
  );
}

export default Subscriptions;
