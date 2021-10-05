import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { EventCardsPage, CalendarPage, SingleEventPage } from "./pages";

function Rotes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <EventCardsPage />
        </Route>
        <Route path="/calendar">
          <CalendarPage />
        </Route>
        <Route path="/event/:id">
          <SingleEventPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Rotes;
