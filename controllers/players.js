const Players = require('../model/players');
const { response } = require('express');

const GetPlayers = async (req, res = response) => {

    const { league, team } = req.body;
    console.log(req.body);
    if (team) {
        const result = await Players.find({ teamName: team });
        res.json({
            result
        });
    } else {
        const result = await Players.find({ leagueCode: league })
        res.json({
            result
        });
    }
};

module.exports = {
    GetPlayers
}