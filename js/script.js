function openLoginPage() {
  // Open loginpage.html in a new tab or window
  window.open("login.html", "_self");
}

function openAboutPage() {
  // Open loginpage.html in a new tab or window
  window.open("about.html", "_self");
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
