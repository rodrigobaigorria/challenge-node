const apiRouter = require('express').Router();

const LeaguesRoutes = require('./leagues');
const TeamsRoutes = require('./teams');
const PlayersRoutes = require('./players');

apiRouter.use('/leagues', LeaguesRoutes);
apiRouter.use('/teams', TeamsRoutes);
apiRouter.use('/players', PlayersRoutes);

module.exports = apiRouter;
