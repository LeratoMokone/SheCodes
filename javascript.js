let currentDate = document.querySelector("#date");
let now = new Date();
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let min = now.getMinutes();
if (min < 10) {
  min = `0${min}`;
}
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = weekDays[now.getDay()];

currentDate.innerHTML = `${date}${day}${hours}:${min}`;

function search(city) {
  city.preventDefault();
  let input = document.querySelector("#cityInput");
  let cityName = document.querySelector("#exampleDataList");
  input.innerHTML = cityName.value;
}
let button = document.querySelector("#searchButton");
button.addEventListener("submit", search);
function search(city) {
  city.preventDefault();
  let input = document.querySelector("#cityInput");
  let cityName = document.querySelector("#exampleDataList");
  input.innerHTML = cityName.value;
}
let button = document.querySelector("#searchButton");
button.addEventListener("submit", search);

function showTemperature(feedback) {
  let temp = Math.round(feedback.data.main.temp);
  let result = document.querySelector("h2");
  result.innerHTML = `${temp}`;
  let city = (document.querySelector("h1").innerHTML = feedback.data.name);
}

function weather(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "97497cc89a36fa38b41798ca9706ad53";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}&appid=${apiKey}&units${units}`;
  axios.get(apiUrl).then(showTemperature);
}
navigator.geolocation.getCurrentPosition(weather);
