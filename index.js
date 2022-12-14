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
      const url = window.location.href
      history.pushState(null, null, url);
      e.preventDefault();
    }
  });
});


const loadJSON = async () => {
  const response = await fetch("./assets/lang.json");
  const json = await response.json();
  return json

}


var check = document.querySelector(".check");

async function language(){
  var isSwitched = check.checked;
  const json = await loadJSON()

  const navbar_ids = ["title", "header", "about_nav", "training_nav", "addtraining_nav", "languages_nav", "experience_nav", "another_nav",
    "about_head", "training_head", "addtraining_head", "languages_head", "experience_head", "another_head", "about_text",
    "training_text", "languages_text", "another_text_1", "another_text_2", "another_text_3", "another_text_4", "another_text_5", "download_cv",
    "experience_1", "experience_2", "experience_3", "experience_4", "personal_1", "personal_2", "add_training_text", "add_training_desc_1",
    "add_training_desc_2", "add_training_desc_3", "add_training_desc_4", "add_training_desc_5", "add_training_desc_6", "add_training_desc_7"]

  if (isSwitched === true) {
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

