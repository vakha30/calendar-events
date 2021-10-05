import React from "react";
import { Helmet } from "react-helmet";
import SeletDate from "../SelectDate";

function CalendarPage() {
  return (
    <>
      <Helmet>
        <title>Мои обытия</title>
      </Helmet>

      <div className="container">
        <SeletDate />
        Страница с календарем
      </div>
    </>
  );
}

export default CalendarPage;
