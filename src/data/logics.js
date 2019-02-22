export default {
  formatPrice(priceNumber) {
    const converted = Array.from(priceNumber.toString());
    let i = 1;
    while (converted.length - 4 * i >= 0) {
      converted.splice(converted.length - 4 * i + 1, 0, ',');
      i += 1;
    }

    return converted.join('');
  },
  calculatePrice(price, extra, unit, quantity) {
    return (price + extra) * unit * quantity;
  },
};
