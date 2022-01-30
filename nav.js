const burger = document.querySelector(".hamburger__menu")
const menu = document.querySelector(".nav__right")

burger.addEventListener("click", () => {
    menu.classList.toggle("show")
    burger.classList.toggle("clicked")
})

