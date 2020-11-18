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


