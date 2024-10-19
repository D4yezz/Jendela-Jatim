// const tombol = document.querySelector(".tombol");
// const navbar = document.querySelector(".navbar-nav");

// tombol.addEventListener("click", () => {
//   navbar.classList.toggle("aktif");
// });

let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}

function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("show");
}

// let lastScrollTop = 0;
// const navbar = document.getElementById('navbar');

// window.addEventListener('scroll', function() {
//   const scrollTop = window.scrollY || document.documentElement.scrollTop;

//   if (scrollTop > lastScrollTop) {
//     // Scrolling down
//     navbar.style.top = '-80px';  // Hide the navbar (adjust the value based on navbar height)
//   } else {
//     // Scrolling up
//     navbar.style.top = '0';
//   }

//   lastScrollTop = scrollTop;
// });

// document.querySelectorAll(".offcanvas .nav-link .btn-close").forEach((link) => {
//   link.addEventListener("click", function () {
//     e.preventDefault();
//     const offcanvasElement = document.querySelector("#navbarOffcanvasLg");
//     const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
//     offcanvasInstance.hide();
//   });
// });

// document.querySelectorAll(".offcanvas .nav-link").forEach((link) => {
//   link.addEventListener("click", function () {
//     const offcanvasElement = document.querySelector("#navbarOffcanvasLg");
//     const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
//     if (offcanvasInstance) {
//       offcanvasInstance.hide();
//     }
//   });
// });

// document.querySelector(".btn-close").addEventListener("click", function () {
//   const offcanvasElement = document.querySelector("#navbarOffcanvasLg");
//   const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
//   if (offcanvasInstance) {
//     offcanvasInstance.hide();
//   }
// });

// document.addEventListener("click", function (event) {
//   var navbar = document.querySelector(".navbar-collapse");
//   if (navbar.classList.contains("show") && event.target.closest(".nav-link")) {
//     // Tutup navbar setelah item dipilih
//     var bootstrapNavbar = bootstrap.Collapse.getInstance(navbar);
//     bootstrapNavbar.hide();
//   }
// });
