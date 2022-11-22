const { Schema, model } = require('mongoose');

const teamsSchema = Schema({
    leagueCode: {
        type: String
    },
    idTeam: {
        type: String
    },
    name: {
        type: String
    },
    tla: {
        type: String
    },
    shortName: {
        type: String
    },
    areaName: {
        type: String
    },
    address: {
        type: String
    },
    website: {
        type: String
    },
    flag: {
        type: String
    }
});

module.exports = model('Teams', teamsSchema);