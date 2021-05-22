function initMap() {
  map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: 28.6139, lng: 77.209 },
    zoom: 8,
  });
}
