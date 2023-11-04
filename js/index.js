$(document).ready(function() {
    $("header .menu").on("click", function(evt) {
      evt.preventDefault();
      $(this).toggleClass("toggled");
    });
    
    $("header nav").on("click", "a", function() {
      $(this).closest("header").find(".menu.toggled").toggleClass("toggled");
    });
  });