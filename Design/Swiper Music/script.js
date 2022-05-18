var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
});

// Music Card
// 1
var playing = document.getElementById("play");
var laguku = document.getElementById("lagu");
function putar() {
  if (laguku.paused) {
    laguku.play();
    playing.innerHTML = "<i class='bx bx-pause' ></i>";
  } else {
    laguku.pause();
    playing.innerHTML = "<i class='bx bx-play' ></i>";
  }
}

playing.onclick = putar;

// 2
var playing2 = document.getElementById("play2");
var laguku2 = document.getElementById("lagu2");
function putar2() {
  if (laguku2.paused) {
    laguku2.play();
    playing2.innerHTML = "<i class='bx bx-pause' ></i>";
    playing2.style.color = "#d8d0c3";
  } else {
    laguku2.pause();
    playing2.innerHTML = "<i class='bx bx-play'></i>";
  }
}

playing2.onclick = putar2;

// 3
var playing3 = document.getElementById("play3");
var laguku3 = document.getElementById("lagu3");
function putar3() {
  if (laguku3.paused) {
    laguku3.play();
    playing3.innerHTML = "<i class='bx bx-pause' ></i>";
    playing3.style.color = "#b08700";
  } else {
    laguku3.pause();
    playing3.innerHTML = "<i class='bx bx-play'></i>";
  }
}

playing3.onclick = putar3;

// 4
var playing4 = document.getElementById("play4");
var laguku4 = document.getElementById("lagu4");
function putar4() {
  if (laguku4.paused) {
    laguku4.play();
    playing4.innerHTML = "<i class='bx bx-pause' ></i>";
    playing4.style.color = "#0056fd";
  } else {
    laguku4.pause();
    playing4.innerHTML = "<i class='bx bx-play'></i>";
  }
}

playing4.onclick = putar4;

// 5
var playing5 = document.getElementById("play5");
var laguku5 = document.getElementById("lagu5");
function putar5() {
  if (laguku5.paused) {
    laguku5.play();
    playing5.innerHTML = "<i class='bx bx-pause' ></i>";
    playing5.style.color = "#abc2d0";
  } else {
    laguku5.pause();
    playing5.innerHTML = "<i class='bx bx-play'></i>";
  }
}

playing5.onclick = putar5;

// 6
var playing6 = document.getElementById("play6");
var laguku6 = document.getElementById("lagu6");
function putar6() {
  if (laguku6.paused) {
    laguku6.play();
    playing6.innerHTML = "<i class='bx bx-pause' ></i>";
    playing6.style.color = "#0b2631";
  } else {
    laguku6.pause();
    playing6.innerHTML = "<i class='bx bx-play'></i>";
  }
}

playing6.onclick = putar6;

// 7
var playing7 = document.getElementById("play7");
var laguku7 = document.getElementById("lagu7");
function putar7() {
  if (laguku7.paused) {
    laguku7.play();
    playing7.innerHTML = "<i class='bx bx-pause' ></i>";
    playing7.style.color = "#ce899b";
  } else {
    laguku7.pause();
    playing7.innerHTML = "<i class='bx bx-play'></i>";
  }
}

playing7.onclick = putar7;

// 8
var playing8 = document.getElementById("play8");
var laguku8 = document.getElementById("lagu8");
function putar8() {
  if (laguku8.paused) {
    laguku8.play();
    playing8.innerHTML = "<i class='bx bx-pause' ></i>";
    playing8.style.color = "#dfa0a9";
  } else {
    laguku8.pause();
    playing8.innerHTML = "<i class='bx bx-play'></i>";
  }
}

playing8.onclick = putar8;
