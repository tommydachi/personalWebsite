const toggle_animation = document.querySelector("#mobile-menu")
const links = document.querySelector(".navbar__menu")

// Display toggle animation
const toggle_menu = () => {
    // Classlist targets all instances of each query
    toggle_animation.classList.toggle('is-active')
    links.classList.toggle('active')
}

// Event listener in the instance of a click, toggle that script
toggle_animation.addEventListener('click', toggle_menu)

var typing = new Typed(".typing", {
    strings: ["Hi, I'm... ^500wait a sec^100", "Hi, I'm Tommy!"],
    loop: false,
    typeSpeed: 70,
    backSpeed: 70
})

VANTA.GLOBE({
  el: "#globe-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x2b3cbe,
  color2: 0xfcf8ee,
  backgroundColor: 0x1d1c1c
})