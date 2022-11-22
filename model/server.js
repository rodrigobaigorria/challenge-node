const express = require('express');
const { dbConnetion } = require('../db/config');
const cors = require('cors');
const bodyParser = require('body-parser');
const { localData } = require('../api');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3003;

        //Database
        this.conectarDB();

        //Middlewares
        this.middelwares();
        //Routes
        this.routes();

        // First call and charge all data from API sport
        this.bind();

    }

    async conectarDB() {
        await dbConnetion();
    }


    middelwares() {
        // Cors configuration
        this.app.use(cors());
        // Body parser
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(bodyParser.json())

    }
    
    routes(name) {
            this.app.use('/leagues', require('../routes/leagues')); 
            this.app.use('/teams', require('../routes/teams'));   
            this.app.use('/players', require('../routes/players'));
    }

    bind() {
        localData('leagues/importLeague');
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log("servidor escuchando en el puerto", this.port);
        });
    }

}

module.exports = Server;