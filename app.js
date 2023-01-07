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
    strings: ["Hi! I'm... ^500wait a sec...", "Hi! I'm Tommy!"],
    loop: false,
    typeSpeed: 80,
    backSpeed: 80
})