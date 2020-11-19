// Google Map
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 43.66, lng: -79.39 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

// Day specification
const day = new Date().getDay();
const rows = Array.from(document.querySelectorAll('.details tr'));
const curDay = rows.find(row => day == row.dataset.day);
curDay.style.fontWeight = "600";

// Menu button
const buttons = Array.from(document.querySelectorAll('.button'));
const food = document.querySelector('#Food');
const smoothies = document.querySelector("#Smoothies");

buttons.forEach(button => button.addEventListener('click', () => {
  console.log(button);
  if (button.dataset.key == 1) {
    buttons[1].classList = 'button chosen';
    buttons[0].classList = 'button';
    food.style.display = 'none';
    smoothies.style.display = 'block';
  }
  else {
    buttons[0].classList = 'button chosen';
    buttons[1].classList = 'button';
    smoothies.style.display = 'none';
    food.style.display = 'block';
  }
}));
