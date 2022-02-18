/* const sections = document.querySelectorAll("section");
const footer = document.getElementsByTagName("footer");
console.log(footer);
const navLi = document.querySelectorAll("nav .container ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionBottom = footer.clientHeight;
    console.log(sectionTop);
    console.log(sectionBottom);
    console.log(sectionHeight);
    if (scrollY >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute("id");
      // console.log(current);
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
}); */

const navLinks = document.querySelectorAll("a");
navLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    const href = e.target.getAttribute("href");
    if (href.includes("#")) {
      const attr = href.toString().replace("#", "");
      const target = document.getElementById(attr);
      target.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      history.pushState(null, null, attr);
      e.preventDefault();
    }
  });
});
