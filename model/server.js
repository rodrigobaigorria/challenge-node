const express = require('express');
const { dbConnetion } = require('../db/config');
const cors = require('cors');
const bodyParser = require('body-parser');
const { localData } = require('../api');
const routes  =require('../routes');

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
    
    routes() {
        this.app.use(routes);
        this.app.use("*", (req, res) =>
            res.status(404).json({ message: "Not found" })
        );
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