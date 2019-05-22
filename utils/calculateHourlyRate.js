const calculateHourlyRate = (amount, frequency) => {
  switch (frequency) {
    case "Po satu":
      return amount;

    case "Po danu":
      return amount / 8;

    case "Po mjesecu":
      return amount / 180;
  }
};

module.exports = calculateHourlyRate;
