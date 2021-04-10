const initialState = {
  catalog: [
    {
      sku: 1,
      icon: "gifts",
      name: "Cofi Voucher",
      price: 5,
      promo: "2x1",
    },
    {
      sku: 2,
      icon: "tshirt",
      name: "Cofi T-Shirt",
      price: 20,
      promo: "bulk>3",
    },
    {
      sku: 3,
      icon: "coffee",
      name: "Cofi Cofee Mug",
      price: 7.5,
      promo: "",
    },
  ],
};

const CagalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CATALOG":
      return {
        ...state,
        catalog: action.payload,
      };
    case "RESET_CATALOG":
      return {
        ...state,
        catalog: initialState.catalog,
      };
    default:
      return state;
  }
};

export default CagalogReducer;
