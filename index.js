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
    // Store original classes
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
          if (className.startsWith("mt-4")) {
            classesToReplace.push({ old: className, new: "ml-3" });
          }
        });
        break;

      case "DIV":
        element.classList.forEach((className) => {
          if (className.startsWith("card-body")) {
            classesToRemove.push(className);
          }
        });
        break;

      case "SECTION":
        element.classList.forEach((className) => {
          if (className.includes("p-") && !className.includes("p-3")) {
            classesToRemove.push(className);
          }
          if (className.includes("p-3")) {
            classesToReplace.push({ old: className, new: "pr-3" });
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

function downloadPDF() {
  const content = document.getElementById("content-to-download");
  if (!content) {
    console.error("Element not found!");
    return;
  }

  // Modify classes before generating the PDF
  modifyClasses();
  content.classList.remove("border-dark");

  // Style adjustments for the PDF
  content.style.margin = "0";
  content.style.padding = "0";
  document.body.style.fontSize = "8px";
  document.body.style.fontFamily = "Arial";

  const h4Elements = document.querySelectorAll("h4");
  const replacedElements = [];

  h4Elements.forEach((h4) => {
    const div = document.createElement("div");
    div.innerHTML = h4.innerHTML;
    div.style.fontSize = "7px";
    div.style.fontWeight = "bold";
    div.className = h4.className;
    div.id = h4.id;
    if (div.id !== "about_head") {
      div.classList.add("ml-3");
    }
    h4.replaceWith(div);
    replacedElements.push({ original: h4, new: div });
  });

  const hrElements = document.querySelectorAll("hr");
  hrElements.forEach((hr) => {
    hr.style.margin = "0";
    hr.style.width = "100%";
    hr.style.border = "none";
    hr.style.borderTop = "1px solid black";
  });

  const img = document.querySelector("img");
  if (img) {
    img.style.width = "100px";
    img.style.height = "auto";
  }

  const options = {
    margin: 0,
    filename: "CV.pdf",
    image: { type: "png", quality: 1 },
    html2canvas: {
      scale: 4,
      useCORS: true,
      letterRendering: true,
    },
    jsPDF: {
      unit: "in",
      format: "a4",
      orientation: "portrait",
      dpi: 400,
      compress: true,
    },
  };

  html2pdf()
    .from(content)
    .set(options)
    .save()
    .then(() => {
      //window.location.reload();
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

var check = document.querySelector(".check");

async function switch_language() {
  var isSwitched = check.checked;
  const json_data = await loadJSON();
  const id_nodes = document.querySelectorAll("*[id]");
  const navbar_ids = Array.from(id_nodes).map((element) => element.id);
  var language = isSwitched ? "en" : "es";

  for (const value of navbar_ids) {
    if (json_data[language][value] !== undefined) {
      document.getElementById(value).innerHTML = json_data[language][value];
    }
  }
  document.getElementById("current-age").textContent = currentAge();
  document.getElementById("current-year").textContent = currentYear();
}
check.addEventListener("click", switch_language);
document.getElementById("current-age").textContent = currentAge();
document.getElementById("current-year").textContent = currentYear();
