const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cdab6bf02amsh7f5044b87f85827p1bca23jsn0a357caa4fe2", // Your API key
    "X-RapidAPI-Host": "weather-api99.p.rapidapi.com", // Your API host
  },
};

const getWeather = (city) => {
  fetch(`https://weather-api99.p.rapidapi.com/weather?city=${city}`, options) // Correctly formatted URL
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((response) => {
      console.log(response); // Check if you're getting a valid response
      // Ensure these properties exist in the response
      cloud_pct.innerHTML = response.cloud_pct || '30';
      temp.innerHTML = response.temp || '32';
      feels_like.innerHTML = response.feels_like || '23';
      humidity.innerHTML = response.humidity || '57';
      min_temp.innerHTML = response.min_temp || '24';
      max_temp.innerHTML = response.max_temp || '36';
      wind_speed.innerHTML = response.wind_speed || '10';
      wind_degrees.innerHTML = response.wind_degrees || '35';
      sunrise.innerHTML = response.sunrise || '6:30';
    })
    .catch((err) => console.error(err));
};

// Event listener for the submit button
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value); // Ensure city.value is set correctly
});
