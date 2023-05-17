// ************************* Pop-up Mobile Menu ************************* //

const btn = document.querySelector('#hamburger');
const img = document.querySelector('#hamburger img');
const mobileContainer = document.createElement('div');
mobileContainer.id = 'mobile-menu-container';
const mobileMenu = document.createElement('div');
mobileMenu.id = 'mobile-menu';
const menuLink = document.createElement('div');
menuLink.id = 'mobile-menu-links';
const portfolio = document.getElementById('nav-link-1');
const about = document.getElementById('nav-link-2');
const contact = document.getElementById('nav-link-3');
menuLink.appendChild(portfolio);
menuLink.appendChild(about);
menuLink.appendChild(contact);
mobileMenu.appendChild(menuLink);

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
