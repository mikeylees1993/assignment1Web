/**
 * kingston weather Daily
 */
const MondayKing = {
    POP:0.3,
    highTemp:21,
    lowTemp:13,
    currentTemp:19,
    windSpeed:29,
    description:'A mix of sun and clouds',
    dayOfweek:'monday'
};
const TuesdayKing = {
    POP:0.7,
    highTemp:15,
    lowTemp:4,
    currentTemp:15,
    windSpeed:28,
    description:'A few Showers',
    dayOfweek:'tuesday'
};
const WednesdayKing = {
    POP:0.1,
    highTemp:11,
    lowTemp:8,
    currentTemp:11,
    windSpeed:27,
    description:'Sunny',
    dayOfweek:'wednesday'
};
const ThursdayKing = {
    POP:0.3,
    highTemp:13,
    lowTemp:9,
    currentTemp:13,
    windSpeed:21,
    description:'Cloudy with sunny breaks',
    dayOfweek:'thursday'
};
const FridayKing = {
    POP:0.1,
    highTemp:14,
    lowTemp:10,
    currentTemp:14,
    windSpeed:19,
    description:'Sunny',
    dayOfweek:'friday'
};
const SaturdayKing = {
    POP:0.1,
    highTemp:14,
    lowTemp:9,
    currentTemp:14,
    windSpeed:18,
    description:'Sunny',
    dayOfweek:'saturday'
};
const SundayKing = {
    POP:0.6,
    highTemp:16,
    lowTemp:11,
    currentTemp:16,
    windSpeed:33,
    description:'A few showers',
    dayOfweek:'sunday'
};

/**
 * Toronto Weather Daily
 */
 const MondayTor = {
    POP:0.3,
    highTemp:22,
    lowTemp:8,
    currentTemp:21,
    windSpeed:26,
    description:'Cloudy with sunny breaks',
    dayOfweek:'monday'
 };
 const TuesdayTor = {
    POP:0.4,
    highTemp:11,
    lowTemp:4,
    currentTemp:11,
    windSpeed:25,
    description:'Chance of a shower',
    dayOfweek:'tuesday'
 };
 const WednesdayTor = {
    POP:0.2,
    highTemp:12,
    lowTemp:5,
    currentTemp:12,
    windSpeed:23,
    description:'Sunny',
    dayOfweek:'wednesday'
 };
 const ThursdayTor = {
    POP:0.2,
    highTemp:15,
    lowTemp:6,
    currentTemp:15,
    windSpeed:21,
    description:'Mainly Sunny',
    dayOfweek:'thursday'
 };
 const FridayTor = {
    POP:0.2,
    highTemp:16,
    lowTemp:7,
    currentTemp:16,
    windSpeed:16,
    description:'Mainly Cloudy',
    dayOfweek:'friday'
 };
 const SaturdayTor = {
    POP:0.4,
    highTemp:16,
    lowTemp:9,
    currentTemp:16,
    windSpeed:21,
    description:'A chance of showers',
    dayOfweek:'saturday'
 };
 const SundayTor = {
    POP:0.6,
    highTemp:19,
    lowTemp:11,
    currentTemp:18,
    windSpeed:31,
    description:'A few Showers',
    dayOfweek:'sunday'
 };

 /**
  * Ottawa Weather Daily
  */
  const MondayOtt = {
    POP:0.3,
    highTemp:22,
    lowTemp:11,
    currentTemp:21,
    windSpeed:11,
    description:'A mix of sun and clouds',
    dayOfweek:'monday'
  };
  const TuesdayOtt = {
    POP:0.7,
    highTemp:12,
    lowTemp:3,
    currentTemp:12,
    windSpeed:21,
    description:'Light Rain',
    dayOfweek:'tuesday'
  };
  const WednesdayOtt = {
    POP:0.2,
    highTemp:11,
    lowTemp:6,
    currentTemp:11,
    windSpeed:22,
    description:'Mainly Sunny',
    dayOfweek:'wednesday'
  };
  const ThursdayOtt = {
    POP:0.3,
    highTemp:13,
    lowTemp:6,
    currentTemp:13,
    windSpeed:14,
    description:'A mix of sun and clouds',
    dayOfweek:'thursday'
  };
  const FridayOtt = {
    POP:0.1,
    highTemp:15,
    lowTemp:6,
    currentTemp:15,
    windSpeed:14,
    description:'Sunny',
    dayOfweek:'friday'
  };
  const SaturdayOtt = {
    POP:0.1,
    highTemp:15,
    lowTemp:7,
    currentTemp:15,
    windSpeed:11,
    description:'Sunny',
    dayOfweek:'saturday'
  };
  const SundayOtt = {
    POP:0.4,
    highTemp:17,
    lowTemp:8,
    currentTemp:17,
    windSpeed:25,
    description:'Mainly Sunny',
    dayOfweek:'sunday'
  };

/**
 * weekly weather 
 */
const kingstonWeekly = [MondayKing,TuesdayKing,WednesdayKing,ThursdayKing,FridayKing,SaturdayKing,SundayKing];
const TorontoWeekly = [MondayTor,TuesdayTor,WednesdayTor,ThursdayTor,FridayTor,SaturdayTor,SundayTor];
const OttawaWeekly=[MondayOtt,TuesdayOtt,WednesdayOtt,ThursdayOtt,FridayOtt,SaturdayOtt,SundayOtt];

/**
 * weather for areas
 */
 const weather={
    kingston:kingstonWeekly,
    toronto:TorontoWeekly,
    ottawa:OttawaWeekly
};

module.exports = weather;