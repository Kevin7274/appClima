const APIKEY = '544a0b19483a14d6c54fcc13f9caebc1';
const URLBASE = 'https://api.openweathermap.org/data/2.5/weather?';

async function request(url){
    return fetch(url).then(result => result.json());
}




async function getClima(lat, lon) {
    const url = URLBASE + `lat=${lat}&lon=${lon}&appid=${APIKEY}`;
    const data = await request(url);
    console.log(url);
}

navigator
     .geolocation
     .getCurrentPosition(positions => {
        const lat = positions.coords.latitude;
        const lon = positions.coords.longitude;
        getClima(lat, lon);
     })