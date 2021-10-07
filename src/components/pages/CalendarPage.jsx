import React from "react";
import { Helmet } from "react-helmet";

import SelectDate from "../SelectDate";
import Subscriptions from "../Subscriptions";
function CalendarPage() {
  return (
    <>
      <Helmet>
        <title>Мои обытия</title>
      </Helmet>

      <div className="container">
        <SelectDate />
        <Subscriptions />
      </div>
    </>
  );
}

export default CalendarPage;
