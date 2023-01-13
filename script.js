(function () {
  var browserZoomLevel =
  Math.round(window.devicePixelRatio*100);
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();
