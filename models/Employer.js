const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployerSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        min:9
    }
});

module.exports = Employer = mongoose.model('employer', EmployerSchema);
