// Contact Form
const kirim = document.querySelector(".btnKirim");
const loading = document.querySelector(".btnLoading");
const myAlert = document.querySelector(".alert");
const btnAlert = document.querySelector(".closeAlert");

const scriptURL = "https://script.google.com/macros/s/AKfycbyrfzP5grbLwggHCy2FAwcVKYOGaYrHKRtvkToHBPdVWibE0N_WBY_P9oo-OwP8UXvjrw/exec";
const form = document.forms["mywebForm"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  kirim.classList.toggle("d-none");
  loading.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      kirim.classList.toggle("d-none");
      loading.classList.toggle("d-none");
      form.reset();
      myAlert.classList.toggle("d-none");
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
  setTimeout(function () {
    myAlert.classList.toggle("d-none");
  }, 5000);
});

// JS
// Navbar
document.addEventListener("DOMContentLoaded", function () {
  var myOffcanvas = document.getElementById("offcanvasExample");
  var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
  document.getElementById("OpenMenu").addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
  });
});

// Design
const tombol = document.getElementById("tombolDesign");
const designChild = document.getElementsByClassName("design-child");
const designGrandChild = document.getElementsByClassName("web-design");
const blurr = document.getElementsByClassName("blackScreen");

$.each(designChild, function (i) {
  designChild[i].addEventListener("mouseenter", function () {
    designGrandChild[i].classList.add("gede");
    document.getElementsByClassName("textDesign")[i].classList.add("textMuncul");
  });
  designChild[i].addEventListener("mouseleave", function () {
    designGrandChild[i].classList.remove("gede");
    document.getElementsByClassName("textDesign")[i].classList.remove("textMuncul");
  });
});

// jQuery

// Scroll
$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  // Tombol Design
  if (wScroll > $(tombol).offset().top - 550) {
    $(tombol).addClass("jMuncul");
    $(".content.tGeser").css({
      opacity: "0",
    });
  } else {
    $(".content.tGeser").css({
      opacity: "1",
    });
    $(tombol).removeClass("jMuncul");
  }

  // About

  if (wScroll > $(".aboutContent").offset().top - 550) {
    $(".pKiri").addClass("aboutMuncul");
    $(".pKanan").addClass("aboutMuncul");
    $(".profile").addClass("aboutMuncul");
  } else {
    $(".pKiri").removeClass("aboutMuncul");
    $(".pKanan").removeClass("aboutMuncul");
    $(".profile").removeClass("aboutMuncul");
  }

  if (wScroll > $(".aboutContent").offset().top + 100) {
    $(".pKanan").css({
      transform: "translate(0px, " + wScroll / 10 + "%)",
    });
    $(".pKiri").css({
      transform: "translate(0px, " + wScroll / 15 + "%)",
    });
  } else {
    $(".pKanan").css({
      transform: "translate(0,0)",
    });
    $(".pKiri").css({
      transform: "translate(0px,0)",
    });
  }

  // Pendidikan
  if (wScroll > $(".pendidikan").offset().top - 350) {
    $(".pKiri").css({
      transform: "translate(-100px,0)",
    });
    $(".pKiri").removeClass("aboutMuncul");
    $(".pKanan").removeClass("aboutMuncul");
    $(".profile").removeClass("aboutMuncul");

    $(".textHeader").addClass("textHeaderMuncul");
    $(".sekolahParent").addClass("sekolahParentMuncul");
  } else {
    $(".textHeader").removeClass("textHeaderMuncul");
    $(".sekolahParent").removeClass("sekolahParentMuncul");
  }
});

// On Load
$(window).on("load", function () {
  // Jumbotron
  $(".jumbotron .display-4").addClass("jGeser");
  $(".jumbotron .display-4  span").addClass("jGeser");
  $(".jumbotron .lead").addClass("jGeser");

  // Tombol
  $(tombol).addClass("tGeser");
});

// On Click
// Design
$(tombol).on("click", function () {
  $(designChild).each(function (i) {
    setTimeout(function () {
      $(designChild).eq(i).toggleClass("designChildMuncul");
    }, 500 * (i + 1));
  });

  var height = $(".designChildMuncul").height();
  if (height == undefined) {
    console.log("asu");
    $(window).scroll(function () {
      let wScroll = $(this).scrollTop();

      if (wScroll > $(tombol).offset().top - 550) {
        $(tombol).addClass("jMuncul");
        $(".content.tGeser").css({
          opacity: "1",
        });
      } else {
        $(".content.tGeser").css({
          opacity: "1",
        });
        $(tombol).removeClass("jMuncul");
      }
    });
  } else {
    $(window).scroll(function () {
      let wScroll = $(this).scrollTop();

      if (wScroll > $(tombol).offset().top - 550) {
        $(tombol).addClass("jMuncul");
        $(".content.tGeser").css({
          opacity: "0",
        });
      } else {
        $(".content.tGeser").css({
          opacity: "1",
        });
        $(tombol).removeClass("jMuncul");
      }
    });
  }
});
// Pendidikan
$(".sekolah").on("click", function () {
  $(".textPendidikan").toggleClass("textPendidkikanMuncul");
});
