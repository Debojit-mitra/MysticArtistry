function openLoginPage() {
  // Open loginpage.html in a new tab or window
  window.open("../html/login.html", "_self");
}

function openAboutPage() {
  // Open about.html in a new tab or window
  window.open("../html/about.html", "_self");
}

function openBlogPage() {
  // Open blog.html in a new tab or window
  window.open("../html/blog.html", "_self");
}

function openShopPage() {
  // Open shop.html in a new tab or window
  window.open("../html/index.html", "_self");
}

function redirectToPage(pageUrl) {
  window.location.href = pageUrl;
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
