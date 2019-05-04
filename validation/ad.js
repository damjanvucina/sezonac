const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateAdInput(data) {
  const errors = {};

  if (isEmpty(data.region) || data.region === "DEFAULT") {
    errors.region = "Potrebno je unijeti županiju rada.";
  }

  if (isEmpty(data.city) || data.city === "DEFAULT") {
    errors.city = "Potrebno je unijeti mjesto rada.";
  }

  if (isEmpty(data.category) || data.category === "DEFAULT") {
    errors.category = "Potrebno je unijeti kategoriju posla.";
  }

  if (
    !isEmpty(data.employees) &&
    !Validator.isLength(data.employees.toString(), { min: 1, max: 100 })
  ) {
    errors.employees = "Broj traženih radnika mora biti između 1 i 100.";
  }
  if (isEmpty(data.employees)) {
    errors.employees = "Potrebno je unijeti broj traženih radnika.";
  }

  if (isEmpty(data.frequency) || data.frequency === "DEFAULT") {
    errors.frequency = "Potrebno je unijeti oblik plaćanja.";
  }

  if (!isEmpty(data.amount) && !Validator.isFloat(data.amount.toString())) {
    errors.amount = "Neispravan iznos plaćanja.";
  }

  if (isEmpty(data.amount)) {
    errors.amount = "Potrebno je unijeti iznos plaćanja.";
  }

  if (!Validator.isLength(data.description, { min: 1, max: 100 })) {
    errors.description = "Opis posla mora imati između 1 i 100 znakova.";
  }
  if (isEmpty(data.description)) {
    errors.description = "Potrebno je unijeti opis posla.";
  }

  if (!Validator.isAfter(data.jobstartdate)) {
    errors.jobstartdate =
      "Početak obavljanja posla mora biti nakon današnjeg datuma.";
  }

  if (isEmpty(data.jobstartdate)) {
    errors.jobstartdate = "Potrebno je unijeti datum početka obavljanja posla.";
  }

  if (!Validator.isAfter(data.adexpirationdate)) {
    errors.adexpirationdate = "Istek oglasa mora biti nakon današnjeg datuma.";
  }
  if (isEmpty(data.adexpirationdate)) {
    errors.adexpirationdate = "Potrebno je unijeti datum isteka oglasa.";
  }

  if (isEmpty(data.contact)) {
    errors.contact = "Potrebno je unijeti kontakt broj.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
