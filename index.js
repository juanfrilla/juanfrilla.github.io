function displayPhoneNumber(event) {
  event.preventDefault();
  const phoneLink = document.getElementById('phone-number');

  const reversedPhoneNumber = '698395386';
  const phoneNumber = '+34-' + reversedPhoneNumber.split('').reverse().join('');

  const phoneSpan = document.createElement('span');
  phoneSpan.innerText = phoneNumber;
  phoneLink.parentNode.replaceChild(phoneSpan, phoneLink);
}
window.displayPhoneNumber = displayPhoneNumber;

const currentAge = () => {
  var today = new Date();
  var birthDate = new Date("1994-08-04");
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const currentYear = () => {
  return new Date().getFullYear();
};

const navLinks = document.querySelectorAll("a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = e.target.getAttribute("href");
    if (href && href.includes("#")) {
      const attr = href.toString().replace("#", "");
      const target = document.getElementById(attr);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      const url = window.location.href;
      history.pushState(null, null, url);
      e.preventDefault();
    }
  });
});

const loadJSON = async () => {
  const response = await fetch("./assets/lang.json");
  const json = await response.json();
  return json;
};

async function switchLanguage(preloadLanguage = null) {
  var check = document.querySelector(".check");
  const json_data = await loadJSON();
  const id_nodes = document.querySelectorAll("*[id]");
  const navbar_ids = Array.from(id_nodes).map((element) => element.id);

  var language = preloadLanguage || (check.checked ? "en" : "es");

  for (const value of navbar_ids) {
    if (json_data[language][value] !== undefined) {
      document.getElementById(value).innerHTML = json_data[language][value];
    }
  }

  document.getElementById("current-age").textContent = currentAge();
  document.getElementById("current-year").textContent = currentYear();
}

async function preloadDefaultLanguage() {
  const userPreferredLanguage = navigator.language || navigator.userLanguage;

  let defaultLanguage = "es";
  if (userPreferredLanguage.startsWith("en")) {
    defaultLanguage = "en";
  }

  await switchLanguage(defaultLanguage);
}

document.querySelector(".check").addEventListener("change", () => {
  switchLanguage();
});

window.addEventListener("load", preloadDefaultLanguage);
document.getElementById("current-age").textContent = currentAge();
document.getElementById("current-year").textContent = currentYear();
