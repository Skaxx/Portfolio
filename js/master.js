$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

function date() {
  const day = document.querySelector('.day')
    const month = document.querySelector('.month')
    const year = document.querySelector('.year')
    const hours = document.querySelector('.hours')
    const minutes = document.querySelector('.minutes')
    const seconds = document.querySelector('.seconds')

    const days = [
      'Niedziela',
      'Poniedziałek',
      'Wtorek',
      'Środa',
      'Czwartek',
      'Piątek',
      'Sobota'
    ]

    const runClock = () => {
      const now = new Date()
      day.innerText = days[now.getDay()]
      hours.innerText = now.getHours()
      minutes.innerText = now.getMinutes()
    }
    runClock()
    setInterval(runClock, 1000)
}
