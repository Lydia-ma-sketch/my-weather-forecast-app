function handleSearch(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = city.value;
}
// The event will be triggered by clicking the button or pressing enter
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
