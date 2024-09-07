function updateWeather(response) {
  //update temperature value
  let temperature = document.querySelector("#temperature-value");
  temperature.innerHTML = Math.round(response.data.temperature.current);
  //update city
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
  //update temperature description
  let description = document.querySelector("#temperature-description");
  description.innerHTML = response.data.condition.description;
  //update humidity
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  //update wind-speed
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  //update temperature-icon
  let icon = document.querySelector("#temperature-icon");
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="temperature-icon"
  />`;
  //update date&time
  let dateTime = document.querySelector("#date-time");
  dateTime.innerHTML = formatDateTime;
}
function searchCity(city) {
  let apiKey = "ec3f3cc5ba623cbcd7873aab4b1c3t0o";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}
function handleSearch(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input");
  searchCity(city.value);
}
// The event will be triggered by clicking the button or pressing enter
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
//set default city
searchCity("Taunggyi");
