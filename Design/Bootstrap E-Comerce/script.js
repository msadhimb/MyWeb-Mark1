// Product
var angka = 0;

// Product 1
const tombolKurang = document.getElementById("kurang");
const tulisan = document.getElementById("text");
const tombolTambah = document.getElementById("tambah");

function menambahJumlah() {
  angka++;
  tulisan.innerHTML = angka;
}

function mengurangiJumlah() {
  angka--;
  tulisan.innerHTML = angka;
  if (angka <= 0) {
    angka = 0;
    tulisan.innerHTML = angka;
  }
}

tombolTambah.addEventListener("click", menambahJumlah);
tombolKurang.addEventListener("click", mengurangiJumlah);

// Product 2
const tombolKurang2 = document.getElementById("kurang2");
const tulisan2 = document.getElementById("text2");
const tombolTambah2 = document.getElementById("tambah2");

function menambahJumlah2() {
  angka++;
  tulisan2.innerHTML = angka;
}

function mengurangiJumlah2() {
  angka--;
  tulisan2.innerHTML = angka;
  if (angka <= 0) {
    angka = 0;
    tulisan2.innerHTML = angka;
  }
}

tombolKurang2.addEventListener("click", mengurangiJumlah2);
tombolTambah2.addEventListener("click", menambahJumlah2);

// Musik

var lagu = document.getElementById("mySong");
var play = document.getElementById("iconPlay");

function cryforme() {
  if (lagu.paused) {
    lagu.play();
    play.src = "Music/pause.png";
  } else {
    lagu.pause();
    play.src = "Music/play.png";
  }
}

play.onclick = cryforme;

// Paralax

// Jumbotron
$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  // Jumbotron
  $(".jumbotron .container").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  // About
  if (wScroll > $(".about").offset().top - 550) {
    $(".pKiri").addClass("pMuncul");
    $(".pKanan").addClass("pMuncul");
  } else {
    $(".pKiri").removeClass("pMuncul");
    $(".pKanan").removeClass("pMuncul");
  }

  // Product
  if (wScroll > $(".product").offset().top - 550) {
    $(".product .listProduct").each(function (i) {
      setTimeout(function () {
        $(".product .listProduct").eq(i).addClass("proMuncul");
      }, 500 * (i + 1));
    });
  } else {
    $(".product .listProduct").removeClass("proMuncul");
  }
});

$(window).on("load", function () {
  // Jumbotron
  $(".jumbotron .display-4").addClass("jMuncul");
  $(".jumbotron .display-4 p").addClass("jMuncul");
  $(".jumbotron .lead").addClass("jMuncul");

  // Info Panel
  $(".info-panel .characteristic").addClass("muncul");
});
