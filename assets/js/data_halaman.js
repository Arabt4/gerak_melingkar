let userlink = document.getElementById("userlink");
let user = document.getElementById("usernis");

let nameUser = sessionStorage.getItem("name");
let nisUser = sessionStorage.getItem("nis");

function getname() {
  if (nameUser == null) {
    alert("Maaf, kamu harus login terlebih dahulu");
    window.location = "awal.html";
  } else {
    userlink.innerText = nameUser;
  }
}

getname();

function signout() {
  sessionStorage.removeItem("name");
  sessionStorage.removeItem("NIS");
  window.location = "awal.html";
}

console.log(localStorage);

const btn = document.querySelectorAll(".nav-link");
btn[0].addEventListener("click", function () {
  evaluasi();
});
btn[1].addEventListener("click", function () {
  kuis1();
});
btn[2].addEventListener("click", function () {
  kuis2();
});