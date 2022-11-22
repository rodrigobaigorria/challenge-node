const { Schema, model } = require('mongoose');

const playersSchema = Schema({
    teamName: {
        type: String
    },
    leagueCode: {
        type: String
    },
    name: {
        type: String
    },
    position: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    countryOfBirth: {
        type: String
    },
    nationality: {
        type: String
    }
});

module.exports = model('Players', playersSchema);