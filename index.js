const axios = require('axios');

// Location of Toulouse
const LATITUDE = 43.6043;
const LONGITUDE = 1.4437;


function get_winddirection(direction) {
	if (direction > 315 || direction < 15) return 'Nord';
	if (direction > 45 || direction < 115) return 'Est';
	if (direction > 115 || direction < 225) return 'Sud'
	if (direction > 225 || direction < 315) return 'Ouest';
}

async function get_weather() {
	const url = 'https://api.open-meteo.com/v1/forecast?latitude=' + LATITUDE + '&longitude=' + LONGITUDE + '&current_weather=true';
	const response = await axios.get(url);
	const current_weather = response.data.current_weather;
	
	console.log(`La température actuelle est ${current_weather.temperature}°C`);
	console.log(`La vitesse du vent est de ${current_weather.windspeed}km/h`);

	const directionVent = get_winddirection(current_weather.winddirection);

	console.log(`Nous avons un vent de ${directionVent}.`);
}
get_weather();