//saat di klik tampil
const navbarnav = document.querySelector(".navbar-nav");
const body = document.querySelector("body");

document.querySelector("#humberger").onclick = () => {
  navbarnav.classList.toggle("active");
  body.classList.toggle("transparant");
};
//keluar saat d klik di tempat lain
const berger = document.querySelector("#humberger");

document.addEventListener("click", function (e) {
  if (!berger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
