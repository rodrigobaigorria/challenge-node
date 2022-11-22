const { Schema, model } = require('mongoose');

const leaguesSchema = Schema({
    name: {
        type: String
    },
    code: {
        type: String
    },
    areaName: {
        type: String
    },
    flag: {
        type: String
    }
});

module.exports = model('League', leaguesSchema);