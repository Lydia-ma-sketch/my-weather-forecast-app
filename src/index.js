function formatDateTime(date) {
  let hours = date.getHours();
  //Convert hours from 24-hour format to 12-hour format
  hours = hours % 12;
  if (hours == 0) {
    hours = 12; //if hours is 0, set it to 12
  }
  //Determine AM or PM
  if (hours >= 12) {
    let ampm = "p.m";
  } else {
    ampm = "a.m";
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`; //set minutes to two-digits
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}, ${hours}:${minutes}${ampm}`;
}
//Capitalize first letter of temperature description
function capitalizeFirstLetter(str) {
  if (!str) return ""; //handle empty strings
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function updateWeather(response) {
  //update temperature value
  let temperature = document.querySelector("#temperature-value");
  temperature.innerHTML = Math.round(response.data.temperature.current);
  //update city
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
  //update temperature description
  let description = document.querySelector("#temperature-description");
  description.innerHTML = capitalizeFirstLetter(
    response.data.condition.description
  );
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
  let date = new Date(response.data.time * 1000);
  let dateTime = document.querySelector("#date-time");
  dateTime.innerHTML = formatDateTime(date);
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
