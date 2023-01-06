const toggle_animation = document.querySelector("#mobile-menu")
const links = document.querySelector(".navbar__menu")

// Display toggle animation
const toggle_menu = () => {
    toggle_animation.classList.toggle('is-active')
    links.classList.toggle('active')
}

toggle_animation.addEventListener('click', toggle_menu)