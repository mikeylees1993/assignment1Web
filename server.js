/**
 * -----------------[PERSONAL INFO]--------------------------------
 * NAME:Lauren Smith
 * COURSE: COMP206
 * MODULE: ASSIGNMENT 1 - WEATHER APP
 * -----------------[END]------------------------------------------
 */
const express = require('express');
const ejs = require('ejs');

const weather = require('./data/weather');
const app = express();
/**
 * -----------------[BEGINING OF MIDDLEWARE/CONFIGURATION]--------------------------------
 */
 app.set("view engine", "ejs");
 app.use(express.static('public'));
 /**
 * -----------------[END OF MIDDLEWARE/CONFIGURATION]--------------------------------
 */

/**
 * -----------------[BEGINING OF ROUTES]--------------------------------
 */

app.get('/weather',(request,response)=>{
    /**
     * Route : /weather
     * Method: GET
     * Params: none
     * Query Params: none 
     * Permission: Public
     * Purpose: to send weather data for the three cities as a responce
     * Responce: JSON Object
     */
    let result = weather; 
    response.send(result);
});

app.get('/weather/:location',(request,response)=>{
    /**
     * Route : /weather/:location
     * Method: GET
     * Params: location
     * Query Params: none 
     * Permission: Public
     * Purpose: to send weather data for the given location as a responce
     * Responce: JSON Object
     */
    let result = weather; 
    if(typeof request.params.location !== 'undefined')
    {
        const location = request.params.location.toLowerCase();
        result = weather[location];
    }
    // response.send(result);
    response.render('locationWeather',{location:request.params.location.toUpperCase(),data:result});
});


app.get('/weather/:location/:day',(request,response)=>{
    /**
     * Route : /weather/:location/:day
     * Method: GET
     * Params: location,day
     * Query Params: none 
     * Permission: Public
     * Purpose: to send weather data for the given location for a given day as a responce
     * Responce: JSON Object
     */
    let result = weather; 
    if(typeof request.params.location !== 'undefined')
    {
        const location = request.params.location.toLowerCase();
        result = weather[location];
        if(typeof request.params.day !== 'undefined')
        {
            const day = request.params.day.toLowerCase();
            const weekly = weather[location];
            const daily = weekly.find(daily => daily.dayOfweek === day);
            console.log(daily);
            result = daily;
        }
    }
    // response.send(result);
    response.render('dailyWeather',{"weather":result,location:request.params.location});
});
/**
* -----------------[END OF ROUTES]--------------------------------
*/
app.listen(3000,()=>{
    console.log("App is listening on http://localhost:3000");
});