const request = require('request');
var getWeather = (lat, lng, callback) =>{
	
request({
	url:'https://api.darksky.net/forecast/22fc1c476ac165fab958feb5867f1352/'+lat+','+lng,
	json: true
},(error, response, body) =>{
	if(error){
		callback('Unable to connect');
	}else if(response.statusCode===404){
		callback('Unable to fetch weather');
	}else{
		callback(undefined, {
			temp: toC(body.currently.temperature),
			actualTemp: toC(body.currently.apparentTemperature)
		});
	}
});
}
var toC =(temp)=> ((temp-32)*5/9).toFixed(2);

module.exports.getWeather = getWeather;
