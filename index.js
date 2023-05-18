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

