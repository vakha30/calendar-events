import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import events from "./features/events";
import date from "./features/date";
const rootReduces = combineReducers({ events, date });

const store = createStore(rootReduces, composeWithDevTools(applyMiddleware(thunk)));

export default store;
