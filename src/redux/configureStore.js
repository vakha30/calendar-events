import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import events from "./features/events";
import date from "./features/date";
import subscriptions from "./features/subsriptions";

const rootReduces = combineReducers({ events, date, subscriptions });

const store = createStore(rootReduces, composeWithDevTools(applyMiddleware(thunk)));

export default store;
