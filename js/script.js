function openLoginPage() {
  // Open loginpage.html in a new tab or window
  window.open("../pages/login.html", "_self");
}

function openShopPage() {
  // Open shop.html in a new tab or window
  window.open("../pages/shop.html", "_self");
}

function openProduct1() {
  // Open shop.html in a new tab or window
  window.open("../pages/products/product1.html", "_self");
}

function redirectToPage(pageUrl) {
  window.location.href = pageUrl;
}

function changeImage(src) {
  const mainImage = document.getElementById("mainImage");
  mainImage.classList.add("fade-out");

  setTimeout(() => {
    mainImage.src = src;
    mainImage.classList.remove("fade-out");
    mainImage.classList.add("fade-in");
  }, 300);

  setTimeout(() => {
    mainImage.classList.remove("fade-in");
  }, 500);
}
