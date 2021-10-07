const initialState = {
  items: [],
};

const subscriptions = (state = initialState, action) => {
  switch (action.type) {
    case "subscriptions/fetch":
      return {
        ...state,
        items: action.payload,
      };

    case "subscriptions/add":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    default:
      return state;
  }
};

export default subscriptions;

export const fetchSubscriptions = () => (dispatch) => {
  const storageSubscriptions = localStorage.getItem("subscriptions")
    ? JSON.parse(localStorage.getItem("subscriptions"))
    : [];
  dispatch({ type: "subscriptions/fetch", payload: storageSubscriptions });
};

export const setSubscriptions = (data) => (dispatch, getState) => {
  const { subscriptions } = getState();

  if (subscriptions.items.find((item) => item.id === data.id)) {
    return;
  }

  const newStorageItems = [...subscriptions.items, data];

  localStorage.setItem("subscriptions", JSON.stringify(newStorageItems));
  dispatch({ type: "subscriptions/fetch", payload: newStorageItems });
};

export const removeSubscription = (id) => (dispatch, getState) => {
  const { subscriptions } = getState();
  const newItems = subscriptions.items.filter((item) => item.id !== id);
  localStorage.setItem("subscriptions", JSON.stringify(newItems));
};

export const selectSubscriptions = (state) => state.subscriptions.items;

export const selectSubscriptionsByFilter = (date, paginationCount) => (state) => {
  return state.subscriptions.items
    .filter((item) => {
      const newDate = new Date(item.date);
      return newDate.getMonth() === date.month && newDate.getFullYear() === date.year;
    })
    .slice(0, paginationCount * 3);
};
