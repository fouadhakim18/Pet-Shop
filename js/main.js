// Humburger 
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu a");
const shop = document.querySelector(".shop")
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
    shop.classList.toggle("active");
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    shop.classList.toggle("active")
  });
});


//Sign In
let userIcon = document.querySelector(".icons #user");
let sign = document.querySelector(".sign");
userIcon.addEventListener("click", () => {
  sign.classList.toggle("sign-show");
});
document.onclick = function (e) {
  if (e.target !== sign && e.target != userIcon) {
    sign.classList.remove("sign-show");
  }
};
sign.addEventListener("click", (e) => {
  e.stopPropagation();
});

//Show Elements when they are reached
let arrayOfTests = [
  document.querySelector("#item1"),
  document.querySelector("#item2"),
  document.querySelector("#item3"),
  document.querySelector("#item4"),
  document.querySelector("#item5"),
  document.querySelector("#item6"),
];
let arrayOfServs = [
  document.querySelector("#service1"),
  document.querySelector("#service2"),
  document.querySelector("#service3"),
  document.querySelector("#service4"),
  document.querySelector("#service5"),
  document.querySelector("#service6"),
];
let sectionTitles = document.querySelectorAll(".section-title");
window.onscroll = function () {
  showItems(arrayOfServs)
  showItems(arrayOfTests)
      sectionTitles.forEach((title) => {
        if (window.pageYOffset > title.offsetTop - 500) {
          title.classList.remove("animate__zoomOut");
          title.classList.add(
            "opacity",
            "animate__animated",
            "animate__zoomIn"
          );
        } else {
          title.classList.add("animate__zoomOut");
          title.classList.remove("opacity");
        }
      });
};
function showItems (array) {
  array.forEach((item) => {
    if (window.pageYOffset > item.offsetTop - 450) {
      item.classList.remove(
        // "opacity",
        "animate__fadeOutLeftBig",
        "animate__fadeOutRightBig"
      );
      array.indexOf(item) % 2 == 0
        ? item.classList.add(
            // "opacity",
            "animate__animated",
            "animate__fadeInLeftBig"
          )
        : item.classList.add(
            // "opacity",
            "animate__animated",
            "animate__fadeInRightBig"
          );
    } else {
      // item.classList.remove("opacity");
      array.indexOf(item) % 2 == 0
        ? item.classList.add("animate__fadeOutLeftBig")
        : item.classList.add("animate__fadeOutRightBig");
    }
  });
}
// CountDown

let countDownDate = new Date("August 31,2022 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.getElementById("Days").innerHTML = days;
  document.getElementById("Hours").innerHTML = hours;
  document.getElementById("Minutes").innerHTML = minutes;
  document.getElementById("Seconds").innerHTML = seconds;
}, 1000);

// Sitters 
let likes = document.querySelectorAll(".sitters .top > i");
likes.forEach((like) => {
  like.addEventListener("click", ( )=> {
    like.classList.toggle("fa-regular");
    like.classList.toggle("fa-solid");
})
})