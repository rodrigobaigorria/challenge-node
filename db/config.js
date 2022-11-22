const mongoose = require('mongoose');


const dbConnetion = async () => {
     try {

        await mongoose.connect('mongodb://localhost:27017/football-data');

        console.log("online database");

    } catch (error) {
        throw new Error('Error in db connection')
    }

}

module.exports = {
    dbConnetion
};