const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    const errors = {};

    data.email = isEmpty(data.email) ? '' : data.email;
    data.password = isEmpty(data.password) ? '' : data.password;

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email nije ispravan.';
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Obvezno je unijeti email.';
    }

    if (!Validator.isLength(data.password, {min: 9, max: 30})) {
        errors.password = 'Šifra mora imati između 9 i 30 znakova.'
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Obvezno je unijeti šifru.';
    }

    return {
        errors,
        "isValid": isEmpty(errors)
    };
};

