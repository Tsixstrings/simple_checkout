export const calculateCheckout = (checkout, catalog) => {
  let total = 0;
  Object.entries(checkout).map((row) => {
    const [sku, qty] = row;
    const [item] = catalog.filter((row) => row.sku == sku);
    let lineTotal;
    switch (item.promo) {
      case "2x1":
        if (qty % 2 == 1) {
          lineTotal = ((qty - 1) / 2) * item.price + item.price;
        } else {
          lineTotal = (qty / 2) * item.price;
        }
        break;
      case "bulk>3":
        if (qty >= 3) {
          lineTotal = (item.price - 1) * qty;
        } else {
          lineTotal = item.price * qty;
        }
        break;
      default:
        lineTotal = item.price * qty;
    }
    total += lineTotal;
  });
  return total;
};

export const getCheckoutData = (checkout, catalog) => {
  let data = {
    checkoutLines: [],
    total: 0,
  };
  Object.entries(checkout).map((row) => {
    const [sku, qty] = row;
    const [item] = catalog.filter((row) => row.sku == sku);
    let lineTotal;
    let promoApplied = false;
    switch (item.promo) {
      case "2x1":
        if (qty == 1) {
          lineTotal = item.price;
        } else if (qty % 2 == 1) {
          lineTotal = ((qty - 1) / 2) * item.price + item.price;
          promoApplied = true;
        } else {
          lineTotal = (qty / 2) * item.price;
          promoApplied = true;
        }
        break;
      case "bulk>3":
        if (qty >= 3) {
          lineTotal = (item.price - 1) * qty;
          promoApplied = true;
        } else {
          lineTotal = item.price * qty;
        }
        break;
      default:
        lineTotal = item.price * qty;
    }
    data.total += lineTotal;
    data.checkoutLines.push({
      name: item.name,
      qty,
      total: lineTotal,
      unitPrice: lineTotal / qty,
      promoApplied,
      promo: item.promo,
    });
  });
  return data;
};
