/* eslint-disable import/no-unresolved */
const router = require('express').Router();

const { LeaguesController } = require('../controllers');

router.get('/', LeaguesController.GetLeagues);

router.get('/importLeague', LeaguesController.ImportLeagues);


module.exports = router;
