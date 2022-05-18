let tombol = document.getElementsById("klik");
let sounds = document.getElementsById("mySong");

function sound() {
  sounds.play();
}

tombol.forEach((element) => {
  tombol.onclick = sound;
});
