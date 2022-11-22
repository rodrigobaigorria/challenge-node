const Teams = require('../model/teams');
const Players = require('../model/players');
const { response } = require('express');

const GetTeams = async (req, res = response) => {
    // 
    const { name, players} = req.body
    
    if (name && players === 'ok') {
        const [teamName, players] = await Promise.all([
            Teams.findOne({ name }),
            Players.find({teamName: name})
        ]);
        res.json({
            teamName,
            players
        });
    } else {
        const teamName = await Teams.findOne({ name })
        res.json({
            teamName
        });
    }
};

module.exports = {
    GetTeams
}