$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

function date() {
  const day = document.querySelector(".day");
  const month = document.querySelector(".month");
  const year = document.querySelector(".year");
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");

  const days = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];

  const runClock = () => {
    const now = new Date();
    day.innerText = days[now.getDay()];
    hours.innerText =
      now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    minutes.innerText =
      now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  };

  runClock();
  setInterval(runClock, 1000);
}

function dateENG() {
  const day = document.querySelector(".day");
  const month = document.querySelector(".month");
  const year = document.querySelector(".year");
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const runClock = () => {
    const now = new Date();
    day.innerText = days[now.getDay()];
    hours.innerText = now.getHours < 10 ? "0" + now.getHours() : now.getHours();
    minutes.innerText =
      now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  };
  runClock();
  setInterval(runClock, 1000);
}

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("lngPick").onchange = function lngPick() {
    if (this.value === "Polish") {
      window.location.href = "https://patryk-pietrzyk.pl/index.html";
    }

    if (this.value === "English") {
      window.location.href = "https://patryk-pietrzyk.pl/indexENG.html";
    }
  };
  
  console.log("DOM has been fully loaded and parsed.");
});
