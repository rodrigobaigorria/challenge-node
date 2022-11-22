const { apiCall } = require('../api');
const League = require('../model/leagues');
const { response } = require('express');
const Teams = require('../model/teams');
const Players = require('../model/players');

const GetLeagues = async (req, res = response) => {
     // 
    League.find({}, (err, DBLeagues) => {
        if (err) throw Error(err);
            res.json({
                DBLeagues
            });
    });
};
const ImportLeagues = (req, res) => {

    League.find({}, async (err, DBLeagues) => {
        if (err) throw Error(err);
        if (DBLeagues.length) {
            res.json({
                DBLeagues
            });
        } else {
            const dataLeague = await apiCall('competitions');
            dataLeague.competitions.forEach(async (item) => {
                const newLeague = new League({
                    name: item.name,
                    code: item.code,
                    areaName: item.area.name,
                    flag: item.emblem
                });
                await newLeague.save();

                const dataTeams = await apiCall(`competitions/${item.code}/teams`);
                if (dataTeams.teams.length > 0) {
                    dataTeams.teams.forEach(async (team) => {
                            try {
                            const newTeam = new Teams({
                                leagueCode: dataTeams.competition.code,
                                idTeam: team.id,
                                name: team.name,
                                tla: team.tla,
                                shortName: team.shortName,
                                areaName: team.area.name,
                                address: team.address,
                                website: team.website,
                                flag: team.area.flag
                            });
                            await newTeam.save();

                            team.squad.forEach(async (player) => {
                                try {
                                    const newPlayer = new Players({
                                        teamName: team.name,
                                        leagueCode: dataTeams.competition.code,
                                        name: player.name,
                                        position: player.position,
                                        dateOfBirth: player.dateOfBirth,
                                        countryOfBirth: player.nationality,
                                        nationality: player.nationality
                                    });
                                    await newPlayer.save();
                                    
                                } catch (error) {
                                    console.log(error);
                                }
                            })

                        } catch (error) {
                            console.log(error);
                        }
                        })
                        

                }

            });
            res.json({
                message: 'ok'
            })
        }
        
    });
       
};

module.exports = {
    GetLeagues,
    ImportLeagues
}