/* eslint-disable import/no-unresolved */
const router = require('express').Router();

const { TeamsController } = require('../controllers');

router.get('/', TeamsController.GetTeams);

module.exports = router;
