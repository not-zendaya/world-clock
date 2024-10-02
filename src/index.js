function displayTime() {
  let NewYorkElement = document.querySelector("#new-york");
  if (NewYorkElement) {
    let NewYorkDateElement = NewYorkElement.querySelector(".date");
    let NewYorkTimeElement = NewYorkElement.querySelector(".time");
    let NewYorkTime = moment().tz("America/New_York");

    NewYorkDateElement.innerHTML = NewYorkTime.format("MMMM Do, YYYY");
    NewYorkTimeElement.innerHTML = NewYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let NairobiElement = document.querySelector("#nairobi");
  if (NairobiElement) {
    let NairobiDateElement = NairobiElement.querySelector(".date");
    let NairobiTimeElement = NairobiElement.querySelector(".time");
    let NairobiTime = moment().tz("Africa/Nairobi");

    NairobiDateElement.innerHTML = NairobiTime.format("MMMM Do, YYYY");
    NairobiTimeElement.innerHTML = NairobiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let TokyoElement = document.querySelector("#tokyo");
  if (TokyoElement) {
    let TokyoDateElement = TokyoElement.querySelector(".date");
    let TokyoTimeElement = TokyoElement.querySelector(".time");
    let TokyoTime = moment().tz("Asia/Tokyo");

    TokyoDateElement.innerHTML = TokyoTime.format("MMMM Do, YYYY");
    TokyoTimeElement.innerHTML = TokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let MelbourneElement = document.querySelector("#melbourne");
  if (MelbourneElement) {
    let MelbourneDateElement = MelbourneElement.querySelector(".date");
    let MelbourneTimeElement = MelbourneElement.querySelector(".time");
    let MelbourneTime = moment().tz("Australia/Melbourne");

    MelbourneDateElement.innerHTML = MelbourneTime.format("MMMM Do, YYYY");
    MelbourneTimeElement.innerHTML = MelbourneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
let cityInterval;

function updatedCity(event) {
  let cityTimezone = event.target.value;
  clearInterval(cityInterval);

  function UpdateCity() {
    if (cityTimezone === "current") {
      cityTimezone = moment.tz.guess();
    }
    let cityTime = moment().tz(cityTimezone);
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `   <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <a href="index.html">Back to Homepage</a>
    `;
  }

  cityInterval = setInterval(UpdateCity, 1000);
}

displayTime();
setInterval(displayTime, 1000);
let selectCityElement = document.querySelector("#city");
selectCityElement.addEventListener("change", updatedCity);
