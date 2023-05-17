// ************************* Pop-up Mobile Menu ************************* //

let btn = document.querySelector('#hamburger')
let img = document.querySelector('#hamburger img')
let mobileContainer = document.createElement('div')
mobileContainer.id = 'mobile-menu-container'
let mobileMenu = document.createElement('div')
mobileMenu.id = 'mobile-menu'
let menuLink = document.createElement('div')
menuLink.id = 'mobile-menu-links'
let portfolio = document.getElementById('nav-link-1')
let about = document.getElementById('nav-link-2')
let contact = document.getElementById('nav-link-3')
menuLink.appendChild(portfolio)
menuLink.appendChild(about)
menuLink.appendChild(contact)
mobileMenu.appendChild(menuLink)

btn.addEventListener('click', function (event) {
  event.preventDefault()

  if (!mobileContainer.classList.contains('visible')) {
    img.src = './images/close-menu.svg'
    document.getElementById('logo').style.visibility = 'hidden'

    mobileContainer.style.display = 'block'

    mobileContainer.appendChild(mobileMenu)
    let siblingContainer = document.querySelector('#toolbar')
    siblingContainer.insertAdjacentElement('afterend', mobileContainer)
    mobileContainer.classList.add('visible')
  }
  else {
    img.src = './images/hamburger.svg'
    document.getElementById('logo').style.visibility = 'visible'
    mobileContainer.style.display = 'none'
    mobileContainer.classList.remove('visible')
  }
})

menuLink.addEventListener('click', function () {
  img.src = './images/hamburger.svg'
  document.getElementById('logo').style.visibility = 'visible'
  mobileContainer.style.display = 'none'
  mobileContainer.classList.remove('visible')
})

