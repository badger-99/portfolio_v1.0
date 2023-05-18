// ************************* Pop-up Mobile Menu ************************* //

const btn = document.querySelector('#hamburger');
const img = document.querySelector('#hamburger img');
const mobileContainer = document.createElement('div');
const mobileMenu = document.createElement('div');
const menuLink = document.createElement('div');
const portfolio = document.getElementById('nav-link-1').cloneNode(true);
const about = document.getElementById('nav-link-2').cloneNode(true);
const contact = document.getElementById('nav-link-3').cloneNode(true);
menuLink.appendChild(portfolio);
menuLink.appendChild(about);
menuLink.appendChild(contact);
mobileMenu.appendChild(menuLink);
mobileContainer.id = 'mobile-menu-container';
mobileMenu.id = 'mobile-menu';
menuLink.id = 'mobile-menu-links';

btn.addEventListener('click', (event) => {
  event.preventDefault();

  if (!mobileContainer.classList.contains('visible')) {
    img.src = './images/close-menu.svg';
    document.getElementById('logo').style.visibility = 'hidden';

    mobileContainer.style.display = 'block';

    mobileContainer.appendChild(mobileMenu);
    const siblingContainer = document.querySelector('#toolbar');
    siblingContainer.insertAdjacentElement('afterend', mobileContainer);
    mobileContainer.classList.add('visible');
  } else {
    img.src = './images/hamburger.svg';
    document.getElementById('logo').style.visibility = 'visible';
    mobileContainer.style.display = 'none';
    mobileContainer.classList.remove('visible');
  }
});

menuLink.addEventListener('click', () => {
  img.src = './images/hamburger.svg';
  document.getElementById('logo').style.visibility = 'visible';
  mobileContainer.style.display = 'none';
  mobileContainer.classList.remove('visible');
});

// ************************* Dynamic HTML for Featured Project ************************* //

// Featured projet object
const feature = {
  name: 'Multi-Post Stories',
  description:
    "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image1: './images/img.svg',
  image2: './images/img-desktop.svg',
  techStack: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
  live: 'https://badger-99.github.io/Portfolio/',
  source: 'https://github.com/badger-99/Portfolio',
};

// Featured project template
const featureTemplate = (featureCard) => `
  <img class="btm_margin mobile" id="feat_img" src="${
  featureCard.image1
}" alt="image placeholder">
        <img class="btm_margin desktop" id="feat_img_desktop" src="${
  featureCard.image2
}" alt="image placeholder">
        <div id="featured_project_right_block">
          <h3 class="btm_margin" id="featured_project_name">
            ${featureCard.name}
          </h3>
          <p class="btm_margin" id="featured_project_title">
            ${featureCard.description}
          </p>
          <ul class="btm_margin tech_stack">
            ${featureCard.techStack
    .map(
      (tech) => `
                <li class="tech">
                  <a class="link" href="">${tech}</a>
                </li>
              `,
    )
    .join('')}
          </ul>
          <span class="btm_margin">
            <a class="link btn see-more" href="">See project</a>
          </span>
        </div>
  `;

// Featured project dynamic HTML injection
const featureProject = document.getElementById('featured_project');
const spotlight = featureTemplate(feature);
featureProject.innerHTML = spotlight;

// ************************* Dynamic HTML for card-grid ************************* //

// Project object-array
const projects = [
  {
    title: 'art',
    name: '<h3 class="card_title">Profesional Art Printing Data</h3>',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/feature.png',
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://badger-99.github.io/Portfolio/',
    source: 'https://github.com/badger-99/Portfolio',
  },
  {
    title: 'healthcare',
    name: '<h3 class="card_title mobile">Profesional Art Printing Data</h3>\n<h3 h3 class= "card_title destop" > Data Dashboard Healthcare</h3>',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/feature.png',
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://badger-99.github.io/Portfolio/',
    source: 'https://github.com/badger-99/Portfolio',
  },
  {
    title: 'website',
    name: '<h3 class="card_title mobile">Profesional Art Printing Data</h3>\n<h3 class="card_title desktop">Website Portfolio</h3>',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/feature.png',
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://badger-99.github.io/Portfolio/',
    source: 'https://github.com/badger-99/Portfolio',
  },
  {
    title: 'art',
    name: '<h3 class="card_title">Profesional Art Printing Data</h3>',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/feature.png',
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://badger-99.github.io/Portfolio/',
    source: 'https://github.com/badger-99/Portfolio',
  },
  {
    title: 'healthcare',
    name: '<h3 class="card_title mobile">Profesional Art Printing Data</h3>\n<h3 h3 class= "card_title destop" > Data Dashboard Healthcare</h3>',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/feature.png',
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://badger-99.github.io/Portfolio/',
    source: 'https://github.com/badger-99/Portfolio',
  },
  {
    title: 'website',
    name: '<h3 class="card_title mobile">Profesional Art Printing Data</h3>\n<h3 class="card_title desktop">Website Portfolio</h3>',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'img/feature.png',
    techStack: ['HTML', 'Bootstrap', 'Ruby'],
    live: 'https://badger-99.github.io/Portfolio/',
    source: 'https://github.com/badger-99/Portfolio',
  },
];

// Gridcard template
const card = (projects) => `
        <div class="grid_card ${projects.title}">
          <div class="work">
            ${projects.name}
            <p class="card_text">${projects.description}</p>
            <ul class="card_list tech_stack">
              ${projects.techStack
    .map(
      (tech) => `
                <li class="tech card_link">
                  <a class="link" href="">${tech}</a>
                </li>
              `,
    )
    .join('')}
            </ul>
          </div>
          <a class="link btn grid-project-link more" href="">See project</a>
        </div>`;

// Gridcard dynamic HTML injection
const projectGrid = document.getElementById('projects_grid');
const gridCard = projects.map((project) => card(project)).join('');
projectGrid.innerHTML = gridCard;

// *****************Pop-Up Window***********************

// Pop-Up Window template
const popWindow = (project) => `
      <div class='pop-head'>
        <h3 class='mobile'>Multi Post Stories</h3>
        <h3 class='desktop'>Keeping track of hundreds  of components website</h3>
        <a class='close-popup' href="">
          <img src="./images/close-menu.svg" alt="close menu">
        </a>
      </div>

      <div class=popTech >
        <ul class="tech_stack">
              <li class="pop-tech">
                <a class="link" href="">HTML</a>
              </li>
              <li class="pop-tech">
                <a class="link" href="">Bootstrap</a>
              </li>
              <li class="pop-tech">
                <a class="link" href="">Ruby on Rails</a>
              </li>
            </ul>
      </div>
    </div>

    <div class='big-flex'>
      <div class='popup-pic'>
        <a class='mobile-max' href="">
          <img src="./images/mobile-pop.png" alt="popup image">
        </a>
        <a class='desktop-only' href="">
          <img src="./images/desktop-pop.png" alt="popup image">
        </a>
      </div>

      <div class='left-card'>
        <div class='popup-text'>
          <p class='hidden'>
          ${project.description}
          </p>
          <p class='mobile'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
          </p>
          <p class='desktop'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
          </p>
          <br class='desktop'>
          <p class='desktop'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
          </p>
        </div>

        <div class='popup-links'>
          <span class="pop-btn">
                <a class="link btn live" href="https://badger-99.github.io/Portfolio/">See live <img class='pop-icon' src="./images/live-server.svg" alt="icon">
                </a>              
          </span>
          <span class="pop-btn">
                <a class="link btn source" href="https://github.com/badger-99/Portfolio">See source <img class='pop-icon' src="./images/git-pop.svg" alt="icon">
                </a>              
          </span>
        </div>
      </div>
    `;

