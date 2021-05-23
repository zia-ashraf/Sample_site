function initMap() {
  map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: 28.6139, lng: 77.209 },
    zoom: 8,
  });
}

// adding tranparency to the navbar
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// Smooth Scrolling option
$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html,body").animate(
      {
        scrollTop: $(hash).offset().top - 65,
      },
      800
    );
  }
});
