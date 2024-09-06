function handleSearch(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = city.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
