export const updateCheckout = (checkout) => ({
  type: "UPDATE_CHECKOUT",
  payload: checkout,
});

export const resetCheckout = () => ({
  type: "RESET_CHECKOUT",
});

export const updateCatalog = (catalog) => ({
  type: "UPDATE_CATALOG",
  payload: catalog,
});

export const resetCatalog = () => ({
  type: "RESET_CATALOG",
});

