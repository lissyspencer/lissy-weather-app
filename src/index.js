function formatDate() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];

  return `on ${day}, at ${hours}:${minutes}`;
}

document.getElementById("current-date-time").innerHTML = formatDate();

function searchCity(event) {
  event.preventDefault();
  cityElement.innerHTML = cityInput.value;
}
let cityElement = document.querySelector("#city");
let cityInput = document.querySelector("#city-input");
cityElement.addEventListener("click", searchCity);

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  let units = "metric";
  let apiKey = "5625fc4e2f1e1a9677dec96db881138a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}
let form = document.querySelector("#search-city");
form.addEventListener("submit", search);
