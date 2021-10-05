import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { fethAllEvents, selectEventsLoading } from "../../redux/features/events";
import Events from "../Events";
import SelectDate from "../SelectDate";
function EventCardsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectEventsLoading);
  useEffect(() => {
    dispatch(fethAllEvents());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>Все события</title>
      </Helmet>
      <div className="container">
        <SelectDate />
        {loading ? "Загрузка..." : <Events />}
      </div>
    </>
  );
}

export default EventCardsPage;
