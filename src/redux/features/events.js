import axios from "axios";

const initialState = {
  loading: false,
  items: [],
  error: null,
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case "events/fetch/pending": {
      return {
        ...state,
        loading: true,
      };
    }
    case "events/fetch/fulfilled": {
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    }
    case "events/fetch/rejected": {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default events;

export const fethAllEvents = () => async (dispatch, getState) => {
  const { events } = getState();

  if (events.items.length > 0) {
    return;
  }

  dispatch({ type: "events/fetch/pending" });
  try {
    const response = await axios("https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62");
    dispatch({ type: "events/fetch/fulfilled", payload: response.data });
  } catch (e) {
    dispatch({ type: "events/fetch/rejected", error: e.toString() });
  }
};

export const fetchEventById = (id) => {
  return async (dispatch, getState) => {
    const { events } = getState();

    if (events.items.find((item) => item.id === +id)) {
      return;
    }

    dispatch({ type: "events/fetch/pending" });

    try {
      const response = await axios("https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62");
      dispatch({ type: "events/fetch/fulfilled", payload: response.data });
    } catch (e) {
      dispatch({ type: "events/fetch/rejected", error: e.toString() });
    }
  };
};

// селекторы, используемые в useSelector
export const selectEventsLoading = (state) => state.events.loading;
export const selectAllEvents = (state) => state.events.items;

export const selectEventById = (id) => (state) => {
  return state.events.items.find((item) => item.id === +id);
};

export const selectEventsByDate = (date) => (state) => {
  return state.events.items.filter((item) => {
    const newDate = new Date(item.date);
    return newDate.getMonth() === date.month && newDate.getFullYear() === date.year;
  });
};
