const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
},
    {
        timestamp: true
    }

)

const Exercise = mongoose.model('Exercise',userSchema,'Exercise');

module.exports = Exercise;