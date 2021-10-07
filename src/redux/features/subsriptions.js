const initialState = {
  items: localStorage.getItem("subscriptions")
    ? JSON.parse(localStorage.getItem("subscriptions"))
    : [],
};

const subscriptions = (state = initialState, action) => {
  switch (action.type) {
    case "subscriptions/set":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    default:
      return state;
  }
};

export default subscriptions;

export const setSubscriptions = (data) => (dispatch, getState) => {
  const { subscriptions } = getState();

  if (subscriptions.items.find((item) => item.id === data.id)) {
    return;
  }

  const newStorageItems = [...subscriptions.items, data];

  localStorage.setItem("subscriptions", JSON.stringify(newStorageItems));
  dispatch({ type: "subscriptions/set", payload: data });
};

export const selectSubscriptions = (state) => state.subscriptions.items;
