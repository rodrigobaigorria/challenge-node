const axios = require('axios');

async function apiCall (endpoint) {
    return new Promise((resolve, reject) => {
    const options = {
        url: `${process.env.BASE_URL}/${endpoint}`,
        method: "GET",
        headers: {
            "X-Auth-Token": process.env.API_KEY
        }
    };
    axios(options)
        .then((response) => {
             resolve(response.data);
        }).catch((error) => {
            reject(error);
        });
    })
};

async function localData (endpoint) {
    return new Promise((resolve, reject) => {
    const options = {
        url: `http://localhost:3003/${endpoint}`,
        method: "GET"
    };
    axios(options)
        .then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        });
  })
};

module.exports = {
    apiCall,
    localData
}