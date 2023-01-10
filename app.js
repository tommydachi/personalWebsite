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

const canvas = document.getElementById('canvas')
const starback = new Starback(canvas, {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
    type: 'line',
    speed: 4,
    frequency: 20,
    slope: { x: -1, y: 10 },
    directionX: 1,
    speed: 3,
    spread: -10,
    randomOpacity: true,
    backgroundColor: ['#0F2027', '#0C1214', '#051218'],
    quantity: 45,
})