const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  //Select all navLinks from burger menu by looking for all li items
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Navigation with burger menu.
    nav.classList.toggle("nav-active");
    //Animate the burger menu and links. Grab the number of links on the file which will be shown as 0,1,2,3 aka 4 links since the start number is actually 0. Verified by console.log(index). Altering the number of li items in the html file altered this output during testing.
    navLinks.forEach((link, index) => {
      //get an even amount of delay time based on the number of links in nav menu. This animation delay controls the time between each link showing up in the burger menu.
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 3s ease forwards ${
          index / 4 + 1.0
        }s`;
      }
    });
    //Animate the burger menu.
    burger.classList.toggle("toggle");
  });
};

navSlide();
