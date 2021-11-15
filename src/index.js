
const data = {
  english:
	{
	  navbar: ["About me", "Training", "Additional Training", "Languages", "Experience", "Additional Information"],
	  home: ["📞+34-683593896", "📧juanframaro@gmail.com", "<a href=\"https://www.linkedin.com/in/jfmozaga\" target=\"_blank\">💼linkedin.com/in/jfmozaga</a>", "<a href=\"https://www.github.com/juanfran928\" target=\"_blank\"> 👨‍💻github.com/juanfran928 </a>", "🎂 1994,04/08 (27 years old)", "", "", "📍 Teguise, Lanzarote, Spain"],
	  cardTitles: ["Juan Francisco Martín Rodríguez - Full Stack Developer", "About", "Training", "Additional Training", "Languages", "Experience", "Additional Information"],
	  cardTexts: [
      `"Local from Lanzarote, my family says that I'm intelligent, so I learnt to read and the table of two with five
      years. I'm a science and technology boy, although my curiosity have led me to read some personal
      development books. I like surfing, I listen and research music in different languages, hence I studied
      Telecommunications Engineering degree wit h mention in Sound and Image , where I fell in love with
      pro gramming. Actually I'm training myself in web development, field where I look for a job opportunity."`,

      `2012, Sept. 2019, Jul. - University of Las Palmas de Gran Canaria (ULPGC): Telecommunications Engineering Degree with mention in
      Sound and Image. I studied Everything related with transmission and reception of information, from electronics, systems and means
      by which information is transmitted, waves and signals, in addition to networks and telematics systems. (Java was the main
      programming l anguage used in this degree).`,

      "FULLSTACK WEB PROGRAMING, INDUSTRIAL ORGANIZATION SCHOOL (EOI), 334 LECTIVE HOURS",

      "English B2 (No certificate)",

      `2021, Sept. – 2021, Dec. - “Pick-Auto” project, in the EOI Full
      Stack Web Programming course. An application to help people with little time to manage the services of
      their vehicles setting appointments between users and drivers, keeping the revisions up to date. Used
      technologies: MariaDB, Express, React, Node, Docker. [View project (<a href="https://github.com/fullstacktf/motor-services-frontend" target="_blank">front-end</a>)(<a href="https://github.com/fullstacktf/motor-services-backend" target="_blank">back-end</a>)]`,

      "2021, Mar. – 2021, Sept. - Tías Town Hall – Computer technician offering support to employees (configuring pcs, repairing, formatting, data recovery, configuring scanners and printers, setting-up of Microsoft 365 and Windows 10, mail migration from POP to IMAP… ) Support to cadastrial office making scripts with Python and Selenium to integrate them in the QGIS program.",

      `2021, Feb. – 2021, Jul. - “Ads” project developed in the Django for
                Everybody course. Place where you can post ads and also post comments
                on them. Used technologies: Django, PostgreSQL, Bootstrap. (<a href="https://github.com/JuanFran928/dj4e" target="_blank">View project</a>)`,

  `2018, Febr. – 2019, Jul. 2018, Febr. – 2019, Jul.. Final Degree Project. "Design and
  Development in the Matlab Environment of a Detection and Location System for Singular Atmospheric Sound
  Events”.
  It has been combined Machine Learning and Detection of Arrival (DOA) techniques to detect and classify
  atmospheric sound events such as rain, ambient sound and thunders locating the provenance of the source.
  Used Technologies: Matlab, Machine Learning, DOA. (<a href="https://accedacris.ulpgc.es/handle/10553/75782" target="_blank">View project</a>)`,
  `2017, Oct 2018, May. University of las Palmas de Gran Canaria Internship at the Vicerectorate of Culture and Society with tasks mostly in the
  recording studio, such as recording events or audio postproduction at studio. (Used environments: Protools, Audacity).`
	  ],
	  addTraining: [
	    "Front-end (Advanced HTML5/CSS3, Flexbox, Grid CSS, PostCSS, etc...).",
	    "Databases (SQL with MySQL, NoSQL with MongoDB).",
	    "Web Servers and Cloud Hosting (NGINX, Digital Ocean, Cloudflare, Domains...).",
	    "SPA Frameworks (VueJS, React, WebComponents, LitElement).",
	    "Programming (Clean Code, Testing, good practices...).",
	    "Back-end (Javascript,Node.js+Express, Go).",
	    "DevOps/Automation (Terminal, GNU/Linux, Git, Package Managers JS, WebPack, Docker, CD/CI...)."
	  ],
	  another: [
	      "✔Driving Licence",
	      "✔Incorporation from January 2022.",
	      "✔Flexible Schedule.",
	      "✔Open to work remotely.",
	      "✔Mobility through spanish territory.",
	      "✔Sunscribed to spanish youth guarantee program."
	    ],
	  btnDownload: [`<a href="https://drive.google.com/file/d/1Txg1y6IC0qt5ZDuhSNmj2zqPWrxhHMTm/view?usp=sharing"
      class="btn btn-success" target="_blank"><i class="fa fa-download"></i>Download my resumé!</a>`]
	},
  spanish:
	{
	  title: "Сәлем Әлем",
	  description:
		  "Сәбіз Lorem ipsum, жеңілдік. Бұл ауырсыну үшін осы ұннан таңдамаңыз, сондықтан аз Осы ауырсынуды орындаңыз. Қызметтер жоқ және оның айырмашылығын ұлы ыңғайсыздық таңдау, тәжірибе ретінде қабылданған ештеңе өңдеу үшін нәтиже инцидент және қателіктерді зерттеуші ләззат, өмір, encounter born сияқты үлкен тағамдар-бәрі! Осы мәселе бойынша біздің сабоның кейбірін ашу, зерттеуші дұрыс! Дана, біз asperiores туған қызметтер тізімі деді олардың жұмыс, кез келген уақытта, содан бері үлкен жүгірістер, соның ішінде ләззат немесе рахат өңдеу сұраймыз. Қашуға."
	}
};
const languageLink = document.querySelectorAll(".langWrap a");
const navLinks = document.querySelectorAll("ul li a");
const navbarElements = document.querySelectorAll("nav ul li a");
const cardTitles = document.querySelectorAll("section h4.card-title");
const cardTexts = document.querySelectorAll("section p.card-text");
const addInfos = document.querySelectorAll("section#another .container .row .col-sm-4");
const homeItems = document.querySelectorAll("section#home .container .row .col-sm-3");
const addtrItems = document.querySelectorAll("section#addtraining .container .row .col-sm-4 ul li");
const btnDownloads = document.querySelectorAll(".card-body.text-center");

languageLink.forEach(el => {
  el.addEventListener("click", () => {
    /* langEl.querySelector(".active").classList.remove("active");
    el.classList.add("active"); */
    const lang = el.getAttribute("language");

    navbarElements.forEach((navbarElement, index, _) => {
      navbarElement.innerHTML = data[lang].navbar[index];
    });
    cardTitles.forEach((cardTitle, index, _) => {
      cardTitle.innerHTML = data[lang].cardTitles[index];
    });
    cardTexts.forEach((cardText, index, _) => {
      cardText.innerHTML = data[lang].cardTexts[index];
    });
    addInfos.forEach((addInfo, index, _) => {
      addInfo.innerHTML = data[lang].another[index];
    });
    homeItems.forEach((homeItem, index, _) => {
      homeItem.innerHTML = data[lang].home[index];
    });
    addtrItems.forEach((addTrItem, index, _) => {
      addTrItem.innerHTML = data[lang].addTraining[index];
    });
    btnDownloads.forEach((element, index, _) => {
      element.innerHTML = data[lang].btnDownload[index];
    });
  });
});

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
