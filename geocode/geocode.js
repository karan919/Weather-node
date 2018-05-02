const request = require('request');

var geocodeAddress = (address, callback) =>{

var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(address);

request({
	url,
	json:true
},(error, response, body) =>{
	if(error){
		callback('Unable to connnect to the server.');
	}else if(body.status==='OVER_QUERY_LIMIT'){
		callback('You are over Query limit, try again!!');
	}else if(body.status==='ZERO_RESULTS'){
		callback('Unable to find that address.');
	}else if(body.status==='OK'){
		callback(undefined, {
			address: body.results[0].formatted_address,
			latitude: body.results[0].geometry.location.lat,
			longitude: body.results[0].geometry.location.lng
		});
	
	}else{
		callback('Error 404 :(');
	}
});
}

module.exports={
	geocodeAddress
};