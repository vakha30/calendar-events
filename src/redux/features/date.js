const initialState = {
  selectedDate: {
    year: 2020,
    month: 1,
  },
};

const date = (state = initialState, action) => {
  switch (action.type) {
    case "date/select":
      return {
        ...state,
        selectedDate: action.payload,
      };

    default:
      return state;
  }
};

export default date;

export const setDate = (date) => (dispatch) => {
  console.log(date);
  dispatch({ type: "date/select", payload: date });
};

// селекторы, используемые в useSelector
export const selectDate = (state) => state.date.selectedDate;
