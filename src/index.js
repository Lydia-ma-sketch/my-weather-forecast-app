function updateWeather(response) {
  let temperature = document.querySelector("#temperature-value");
  temperature.innerHTML = Math.round(response.data.temperature.current);

  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
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
