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
    let WeatherInfo = [weather.kingston,weather.toronto,weather.ottawa];
    let locations = ["Kigston","Toronto","Ottawa"]
    let result = {"locations":locations,"Weather":WeatherInfo};
    response.render('weather-full',{...result});
});

app.get('/weather/:location',(request,response)=>{
    /**
     * Route : /weather/:location
     * Method: GET
     * Params: location
     * Query Params: none 
     * Permission: Public
     * Purpose: to send weather data for the given location as a responce
     * Responce: Location Template 
     */
    let result = weather; 
    if(typeof request.params.location !== 'undefined')
    {
        const location = request.params.location.toLowerCase();
        result = weather[location];
    }
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
     * Responce: Daily Template
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
            result = daily;
        }
    }
    response.render('dailyWeather',{"weather":result,location:request.params.location});
});
app.get('/warmest-location-by-day/:day',(request,responce)=>{
    /**
     * Route : /warmest-day-by-day
     * Method: GET
     * Params: day
     * Query Params: none 
     * Permission: Public
     * Purpose: to send weather info of the warmest location based on the date
     * Responce: Daily Weather Template
     */
    let Temps = [{},{},{}];
    const day = request.params.day;
    let locations=["kingston","toronto","ottawa"];
    let locationWeather = [weather.kingston,weather.toronto,weather.ottawa];
    locationWeather.forEach((LOC,index)=>{
        let daily = LOC.find(daily=>daily.dayOfweek === day);
        Temps[index] = daily;
    });
    let highestTemp = 0;
    let highestIndex=0;
    Temps.forEach((Locale,index)=>{
        if(Locale.highTemp > highestTemp)
        {
            highestTemp=Locale.highTemp;
            highestIndex = index;
        }
    });
    const result = {"location":locations[highestIndex],"weather":Temps[highestIndex]};
    responce.render('dailyWeather',{...result});
});
app.get('/warmest-day-by-location/:location',(request,responce)=>{
    /**
     * Route : /warmest-day-by-location/:location
     * Method: GET
     * Params: location
     * Query Params: none 
     * Permission: Public
     * Purpose: to send warmest date for the given location 
     * Responce: Daily Weather Template
     */
    const location = request.params.location;
    let result = weather;
    let warmestTemp = 0,warmestDay;
    if(typeof location !== 'undefined')
    {
        let locWeather = result[location];
        locWeather.forEach(day => {
            if(day.highTemp > warmestTemp)
            {
                warmestTemp = day.highTemp;
                warmestDay = day;
            }
        });
        result = warmestDay;
    }
    responce.render('dailyWeather',{
        "weather":result,
        "location": location
    });
});
app.get('/average-temps',(request,responce)=>{
    /**
     * Route : /average-temps
     * Method: GET
     * Params: none
     * Query Params: none 
     * Permission: Public
     * Purpose: to send average weather data for the three cities as a responce
     * Responce: Average Temps Tempature
     */
    let avgTemps = [0,0,0];
    const locationWeather = [weather.kingston,weather.toronto,weather.ottawa];
    const location=["Kingston","Toronto","Ottawa"];
    let sumTemps=[0,0,0]
    locationWeather.forEach((Locale,index)=>{
        let sum=0;
        Locale.forEach((weatherInfo)=>{
            sum+=weatherInfo.highTemp;
        })
        sumTemps[index] = sum;
    });
    sumTemps.forEach((sum,index)=>{
        avgTemps[index] = Math.floor(sum/7);
    });
    let result = {"locations":location,"averages":avgTemps};
    responce.render('averagesTemps', {...result});
})
app.get('/sunny-days/:location',(request,responce)=>{
    /**
     * Route : /sunny-days/:location
     * Method: GET
     * Params: location
     * Query Params: none 
     * Permission: Public
     * Purpose: to send days that are sunny 
     * Responce: sunny-days Template
     */
    const location = request.params.location;
    let result = weather[location];
    let days = []
    if(typeof location !== 'undefined')
    {
        result.forEach((day)=>{
            if(day.description.toLowerCase() === 'sunny'){
                days.push(day.dayOfweek);
            }
        });
        
    }
    let results = {"location":location,"days":days}
    responce.render('sunny-days',{...results});
});
/**
* -----------------[END OF ROUTES]--------------------------------
*/
app.listen(3000,()=>{
    console.log("App is listening on http://localhost:3000");
});