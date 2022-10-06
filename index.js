import { forEach } from "lodash";

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
  const response = await fetch("./lang.json");
  const json = await response.json();
  return json
}


var check = document.querySelector(".check");

const language = async () => {
  var isChecked = check.checked;
  const json = await loadJSON()
  const navbar_ids = ["header", "about_nav", "training_nav", "addtraining_nav", "languages_nav", "experience_nav", "another_nav",
    "about_head", "training_head", "addtraining_head", "languages_head", "experience_head", "another_head", "about_text",
    "training_text", "languages_text", "another_text_1", "another_text_2", "another_text_3", "another_text_4", "another_text_5", "another_text_6", "download_cv",
    "experience_1", "experience_2", "experience_3", "experience_4", "personal_1", "personal_2", "add_training_text", "add_training_desc_1",
    "add_training_desc_2", "add_training_desc_3", "add_training_desc_4", "add_training_desc_5", "add_training_desc_6", "add_training_desc_7", "view_project1", "view_project2"]

  if (isChecked === true) {
    forEach(navbar_ids, function (id) {
      document.getElementById(id).innerHTML = json['en'][id]
    })
  } else {
    forEach(navbar_ids, function (id) {
      document.getElementById(id).innerHTML = json['es'][id]
    })
  }
}




check.addEventListener("click", language);