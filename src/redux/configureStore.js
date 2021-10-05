import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import events from "./features/events";
const rootReduces = combineReducers({ events });

const store = createStore(rootReduces, composeWithDevTools(applyMiddleware(thunk)));

export default store;
