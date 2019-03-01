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
  formatPhoneNumber(phoneNumber) {
    // Add '-' to the string
    const numbers = Array.from(this.unformatPhoneNumber(phoneNumber));

    numbers.splice(3, 0, '-');
    numbers.splice(8, 0, '-');

    return numbers.join('');
  },
  unformatPhoneNumber(phoneNumber) {
    // Remove '-' from the string
    return phoneNumber.replace(/-/g, '');
  },
  formatDate(date) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return date.toLocaleDateString('ko-kr', options);
  },
};
