import * as axios from "axios";
const key = 'qCtZ9q5n7ZRgwwinxisuRV17xwfyAFpMfDPV9kWb';

// fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
//     "method": "POST",
//     "headers": {
//         "x-rapidapi-host": "google-translate1.p.rapidapi.com",
//         "x-rapidapi-key": "15eafa6fb7mshfca9d8e00310f48p1cdd0bjsn3bd416e5c789",
//         "accept-encoding": "application/gzip",
//         "content-type": "application/x-www-form-urlencoded"
//     },
//     "body": {
//         "format": "text",
//         "source": "en",
//         "q": "Hello, world!",
//         "target": "es"
//     }
// })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     });


export const apodAPI = {

    getDate(date) {
        return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
            .then(response => {
            return response.data;
         }).catch(() => {
            return 'error';
        });
    },
};

export const neowsAPI = {
  getInfo(startDate, endDate) {
      return axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${key}`)
          .then(response => {
              return response.data;
          }).catch(() => {
              return 'error';
          })
  }
};

export const mrpAPI = {
    getInfoToSol(sol, camera,) {
        return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=${key}`)
            .then(response => {
                return response.data;
            }).catch(() => {
                return 'error';
            })
    },

    getInfoToEarthDate(date, camera) {
        return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=${key}`)
            .then(response => {
                return response.data;
            }).catch(() => {
                return 'error';
            })
    }
};