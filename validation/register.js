const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    const errors = {};

    data.name = isEmpty(data.name) ? '' : data.name;
    data.email = isEmpty(data.email) ? '' : data.email;
    data.password = isEmpty(data.password) ? '' : data.password;
    data.password2 = isEmpty(data.password2) ? '' : data.password2;

    if (!Validator.isLength(data.name, {min: 3, max: 30})) {
        errors.name = 'Ime poslodavca mora imati između 3 i 30 znakova.'
    }
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Obvezno je unijeti ime poslodavca';
    }

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

    if (!Validator.isLength(data.password2, {min: 9, max: 30})) {
        errors.password2 = 'Šifra mora imati između 9 i 30 znakova.'
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Obvezno je unijeti potvrdu šifre.';
    }


    return {
        errors,
        "isValid": isEmpty(errors)
    }
};