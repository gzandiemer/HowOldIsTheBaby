const years = document.getElementById('years');
const months = document.getElementById('months');
const weeks = document.getElementById('weeks');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const countup = document.getElementById('countup');

const currentYear = new Date().getFullYear();
const birthday = new Date('October 15 2021 03:22:00')

function updateCountup() {
  const currentTime = new Date();
  const diff = currentTime - birthday

  const y = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
  const mon = (currentTime.getMonth() - birthday.getMonth() + 12 * y) % 12 - 1;
  const w = (Math.floor(diff / 1000 / 60 / 60 / 24 / 7) - 52 * y) % 4;
  const d = (Math.floor(diff / 1000 / 60 / 60 / 24) - 365 * y - 30 * mon) % 7;
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const min = Math.floor(diff / 1000 / 60) % 60;


  // Add values to DOM
  years.innerHTML = y;
  months.innerHTML = mon;
  weeks.innerHTML = w;
  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = min;
}

// Run every minute
setInterval(updateCountup(), 60 * 1000);



