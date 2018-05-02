const request = require('request');
var geocodeAddress = (address) =>{
	return new Promise((resolve, reject)=>{
	var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(address);
	request({
	url,
	json:true
	},	(error, response, body) => {
			if(error){
				reject('Unable to connnect to the server.');
			}else if(body.status==='OVER_QUERY_LIMIT'){
				reject('You are over Query limit, try again!!');
			}else if(body.status==='ZERO_RESULTS'){
				reject('Unable to find that address.');
			}else if(body.status==='OK'){
				resolve( {
					address: body.results[0].formatted_address,
					latitude: body.results[0].geometry.location.lat,
					longitude: body.results[0].geometry.location.lng
				});
	
			}else{
				reject('Error 404 :(');
			}
		});
	});
};

geocodeAddress('110028').then((location) =>{
	console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage)=>{
	console.log(errorMessage);
});