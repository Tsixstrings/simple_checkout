const initialState = {
  checkout: {},
};

const CheckoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CHECKOUT":
      return {
        ...state,
        checkout: action.payload,
      };
    case "RESET_CHECKOUT":
      return {
        ...state,
        checkout: {},
      };
    default:
      return state;
  }
};

export default CheckoutReducer;
