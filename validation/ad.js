const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateAdInput(data){
    const errors = {};

    if(isEmpty(data.region)){
        errors.region = 'Potrebno je unijeti županiju rada.';
    }

    if(isEmpty(data.city)){
        errors.city = 'Potrebno je unijeti mjesto rada.';
    }

    if(isEmpty(data.category)){
        errors.category = 'Potrebno je unijeti kategoriju posla.';
    }

    if(!Validator.isLength(data.employees, {min: 1, max: 100})){
        errors.employees = 'Broj traženih radnika mora biti između 1 i 100.';
    }
    if(isEmpty(data.employees)){
        errors.employees = 'Potrebno je unijeti broj traženih radnika.';
    }

    if(isEmpty(data.frequency)){
        errors.frequency = 'Potrebno je unijeti oblik plaćanja.';
    }


    if(!Validator.isFloat(data.amount)){
        errors.amount = 'Neispravan iznos plaćanja.';
    }

    if(isEmpty(data.amount)){
        errors.amount = 'Potrebno je unijeti iznos plaćanja.';
    }

    if(isEmpty(data.description)){
        errors.description = 'Potrebno je unijeti opis posla.';
    }

    if(isEmpty(data.jobstartdate)){
        errors.jobstartdate = 'Potrebno je unijeti datum početka obavljanja posla.';
    }

    if(isEmpty(data.adexpirationdate)){
        errors.adexpirationdate = 'Potrebno je unijeti datum isteka oglasa.';
    }

    if(isEmpty(data.contact)){
        errors.contact = 'Potrebno je unijeti kontakt broj.';
    }

    return {
        errors,
        "isValid": isEmpty(errors)
    };
};