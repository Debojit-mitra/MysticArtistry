function openLoginPage() {
  // Open loginpage.html in a new tab or window
  window.open("login.html", "_self");
}

function openShopPage() {
  // Open showPage.html in a new tab or window
  window.open("index.html", "_self");
}

function toggleMenu() {
  var menuItems = document.querySelectorAll("li a");
  var checkbox = document.getElementById("click");
  var isChecked = checkbox.checked;

  if (isChecked) {
    menuItems.forEach(function (item, index) {
      item.classList.add("show-animation");
    });
  } else {
    menuItems.forEach(function (item, index) {
      item.classList.remove("show-animation");
    });
  }
}

const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");

let index = 0;

const updateIndicator = () => {
  indicators.forEach((indicator) => indicator.classList.remove("active"));
  indicators[index].classList.add("active");
};

const goToSlide = () => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
};

const nextSlide = () => {
  index = (index + 1) % slides.length;
  updateIndicator();
  goToSlide();
};

const prevSlide = () => {
  index = (index - 1 + slides.length) % slides.length;
  updateIndicator();
  goToSlide();
};

indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    index = i;
    updateIndicator();
    goToSlide();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  updateIndicator();
  goToSlide();
});

document.querySelector(".slider").addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    nextSlide();
  } else {
    prevSlide();
  }
});

setInterval(nextSlide, 5000); // Auto slide every 5 seconds
