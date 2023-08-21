export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate item's price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce(
      (accumulator, item) => accumulator + item.price * item.qty,
      0
    )
  );
  // Calculate shipping price (if shipping over $100 then it is free else $10)
  state.shippingPrice = addDecimals(state.price > 100 ? 0 : 10);

  // Calculate tax price %15
  state.taxPrice = addDecimals(Number(state.price * 0.15).toFixed(2));

  // Calculate total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);
  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
