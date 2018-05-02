const yargs = require('yargs');

const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')

const argv = yargs
	.options({
		a:{
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for ',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(argv.address,(errorMessage, result) =>{
	if( errorMessage){
		console.log(errorMessage);
	}else{
		console.log(result.address);
		weather.getWeather(result.latitude , result.longitude ,(errorMessage, result) =>{
		if(errorMessage){
			console.log(errorMessage);
		}else {
			console.log('It is currently '+result.temp+' celsius. But it feels like '+result.actualTemp+' celsius.');
		}
	});
	}
});




