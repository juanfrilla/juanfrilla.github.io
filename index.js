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

function modifyClasses() {
  const elements = document.querySelectorAll("h4, div, section");
  elements.forEach((element) => {
    if (!element.originalClasses) {
      element.originalClasses = [...element.classList];
    }

    const classesToRemove = [];
    const classesToReplace = [];

    switch (element.tagName) {
      case "H4":
        element.classList.forEach((className) => {
          if (className.startsWith("card-title")) {
            classesToRemove.push(className);
          }
          // if (className.startsWith("mt-4")) {
          //   classesToReplace.push({ old: className, new: "ml-3" });
          // }
        });
        break;

      case "DIV":
        element.classList.forEach((className) => {
          if (className.startsWith("card-body")) {
            classesToRemove.push(className);
            classesToReplace.push("card-body", "p-0"); // Add classes separately
          }
          if (element.id === "personal_data") {
            classesToReplace.push({ old: className, new: "mb-3 ml-3" });
          }
        });
        const aboutText = element.querySelector("p#about_text");
        if (aboutText) {
          aboutText.classList.add("pl-3");
        }
        break;

      case "SECTION":
        element.classList.forEach((className) => {
          if (className.includes("p-") && !className.includes("p-3")) {
            classesToRemove.push(className);
          }
          if (className.includes("p-3")) {
            //classesToReplace.push({ old: className, new: "pr-3" });
            classesToRemove.push(className);
          }
          if (className.includes("border-dark")) {
            classesToReplace.push({ old: className, new: "border-0" });
          }
          if (className.includes("mt-")) {
            classesToRemove.push(className);
          }
          if (className.includes("mb-")) {
            classesToRemove.push(className);
          }
        });
        break;

      default:
        break;
    }

    element.classList.remove(...classesToRemove);
    classesToReplace.forEach(({ old, new: newClass }) => {
      element.classList.replace(old, newClass);
    });
  });
}

function modifyH4() {
  const h4Elements = document.querySelectorAll("h4");
  const replacedElements = [];

  h4Elements.forEach((h4) => {
    const div = document.createElement("div");
    div.innerHTML = h4.innerHTML;
    div.style.fontSize = "12px";
    div.style.fontWeight = "bold";
    div.className = h4.className;
    div.id = h4.id;
    div.classList.add("ml-3");
    h4.replaceWith(div);
    replacedElements.push({ original: h4, new: div });
  });
}

function modifyHR() {
  const hrElements = document.querySelectorAll("hr");
  hrElements.forEach((hr) => {
    //hr.style.margin = "0";
    hr.style.width = "100%";
    //hr.style.border = "none";
    hr.style.borderTop = "1px solid black";
  });
}

function modifyImg() {
  const img = document.querySelector("img");
  if (img) {
    img.style.width = "150px";
    img.style.height = "auto";
  }
}

function downloadPDF(event) {
  event.preventDefault();
  modifyClasses();
  modifyH4();
  modifyHR();
  modifyImg();

  const content = document.getElementById("content-to-download");
  if (!content) {
    console.error("Element not found!");
    return;
  }
  content.classList.remove("border-dark");
  //content.style.margin = "0";
  //content.style.padding = "0";
  document.body.style.fontSize = "9px";
  document.body.style.fontFamily = "Arial";
  const { jsPDF } = window.jspdf;
  html2canvas(content, {
    scale: 4,
    useCORS: true,
    letterRendering: true,
  })
    .then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        unit: "in",
        format: "a4",
        orientation: "portrait",
        compress: true,
      });

      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("CV.pdf");

      window.location.reload();
    })
    .catch((err) => {
      console.error("Error generating PDF:", err);
    });
}

document.getElementById("download_cv").addEventListener("click", downloadPDF);

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
