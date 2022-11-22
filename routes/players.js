/* eslint-disable import/no-unresolved */
const router = require('express').Router();

const { PlayersController } = require('../controllers');

router.get('/', PlayersController.GetPlayers);

module.exports = router;
