const navLinks = document.querySelectorAll("a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
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

async function loadJSON() {
  const response = await fetch("./assets/lang.json");
  const json = await response.json();
  return json
}


var check = document.querySelector(".check");

const language = async () => {
  var isChecked = check.checked;
  const json = await loadJSON()

  const navbar_ids = ["title", "header", "about_nav", "training_nav", "addtraining_nav", "languages_nav", "experience_nav", "another_nav",
    "about_head", "training_head", "addtraining_head", "languages_head", "experience_head", "another_head", "about_text",
    "training_text", "languages_text", "another_text_1", "another_text_2", "another_text_3", "another_text_4", "another_text_5", "download_cv",
    "experience_1", "experience_2", "experience_3", "experience_4", "personal_1", "personal_2", "add_training_text", "add_training_desc_1",
    "add_training_desc_2", "add_training_desc_3", "add_training_desc_4", "add_training_desc_5", "add_training_desc_6", "add_training_desc_7"]

  if (isChecked === true) {
    for (var id = 0; id < navbar_ids.length; id++) {
      document.getElementById(navbar_ids[id]).innerHTML = json['en'][navbar_ids[id]]
    }
  } else {
    for (var id = 0; id < navbar_ids.length; id++) {
      document.getElementById(navbar_ids[id]).innerHTML = json['es'][navbar_ids[id]]
    }
  }
}
check.addEventListener("click", language);


// Si se refresca la página te lleva al inicio
const pageAccessedByReload = (
  (window.performance.navigation && window.performance.navigation.type === 1) ||
  window.performance
    .getEntriesByType('navigation')
    .map((nav) => nav.type)
    .includes('reload')
);
const url = window.location.href
console.log(url)
if (pageAccessedByReload === true) {
  const result = url.substring(0, url.lastIndexOf('/'))

  window.location.href = result;

}

