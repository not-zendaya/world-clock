function displayTime() {
  let NewYorkElement = document.querySelector("#new-york");
  let NewYorkDateElement = NewYorkElement.querySelector(".date");
  let NewYorkTimeElement = NewYorkElement.querySelector(".time");
  let NewYorkTime = moment().tz("America/New_York");

  NewYorkDateElement.innerHTML = NewYorkTime.format("MMMM Do, YYYY");
  NewYorkTimeElement.innerHTML = NewYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let NairobiElement = document.querySelector("#nairobi");
  let NairobiDateElement = NairobiElement.querySelector(".date");
  let NairobiTimeElement = NairobiElement.querySelector(".time");
  let NairobiTime = moment().tz("Africa/Nairobi");

  NairobiDateElement.innerHTML = NairobiTime.format("MMMM Do, YYYY");
  NairobiTimeElement.innerHTML = NairobiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let TokyoElement = document.querySelector("#tokyo");
  let TokyoDateElement = TokyoElement.querySelector(".date");
  let TokyoTimeElement = TokyoElement.querySelector(".time");
  let TokyoTime = moment().tz("Asia/Tokyo");

  TokyoDateElement.innerHTML = TokyoTime.format("MMMM Do, YYYY");
  TokyoTimeElement.innerHTML = TokyoTime.format("h:mm:ss [<small>]A[</small>]");

  let MelbourneElement = document.querySelector("#melbourne");
  let MelbourneDateElement = MelbourneElement.querySelector(".date");
  let MelbourneTimeElement = MelbourneElement.querySelector(".time");
  let MelbourneTime = moment().tz("Australia/Melbourne");

  MelbourneDateElement.innerHTML = MelbourneTime.format("MMMM Do, YYYY");
  MelbourneTimeElement.innerHTML = MelbourneTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
displayTime();
setInterval(displayTime, 1000);
