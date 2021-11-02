const navLinks = document.querySelectorAll("a");
navLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    const href = e.target.getAttribute("href");
    if (href.includes("#")) {
      const attr = href.toString().replace("#", "");
      console.log(attr);
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
