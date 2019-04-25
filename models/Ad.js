const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdSchema = new Schema({
    employer: {
        type: Schema.Types.ObjectId,
        ref: 'employer'
    },

    name: {
        type: String
    },

    region: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    employees: {
        type: Number,
        min: 1
    },

    salary: [{
        frequency: {
            type: String,
            required: true
        },

        amount: {
            type: Number,
            required: true
        }
    }],

    description:{
        type: String,
        required: true
    },

    jobstartdate: {
        type: Date,
        default: Date.now()
    },

    adexpirationdate: {
        type: Date,
        default: Date.now()
    },

    contact: {
        type: String,
        required: true
    }
});

module.exports = Ad = mongoose.model('ad', AdSchema);