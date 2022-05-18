$(window).on("load", function () {
  // Jumbotron
  $(".jumbotron .display-4").addClass("jMunculD");
  $(".jumbotron .lead").addClass("jMunculL");
  setTimeout(function () {
    $(".jumbotron img").addClass("jMunculI");
  }, 1000);
});
