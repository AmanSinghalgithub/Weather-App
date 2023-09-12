const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ac068e85a8msh93a5e11502eabe6p1e4a48jsn4a33b7c34ee2",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const cityName = document.getElementById("cityName"); // Assuming you have an element with id "cityName"
const cloud_pct = document.getElementById("cloud_pct"); // Assuming you have an element with id "cloud_pct"
const temp = document.getElementById("temp"); // Assuming you have an element with id "temp"
const feels_like = document.getElementById("feels_like"); // Assuming you have an element with id "feels_like"
const humidity = document.getElementById("humidity"); // Assuming you have an element with id "humidity"
const min_temp = document.getElementById("min_temp"); // Assuming you have an element with id "min_temp"
const max_temp = document.getElementById("max_temp"); // Assuming you have an element with id "max_temp"
const wind_speed = document.getElementById("wind_speed"); // Assuming you have an element with id "wind_speed"
const wind_degrees = document.getElementById("wind_degrees"); // Assuming you have an element with id "wind_degrees"
const sunrise = document.getElementById("sunrise"); // Assuming you have an element with id "sunrise"
const sunset = document.getElementById("sunset"); // Assuming you have an element with id "sunset"

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity; // Corrected from "-"
      min_temp.innerHTML = response.min_temp; // Corrected from "-"
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
}

const Submit = document.getElementById("Submit"); // Assuming you have an element with id "Submit"
const city = document.getElementById("city"); // Assuming you have an input element with id "city"

Submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

// Initial call with a default city
getWeather("Delhi");
