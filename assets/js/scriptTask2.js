"use strict";

//Task2 topBar
let rightNavbar = document.querySelector(".right-bar")
let rightOpen = document.querySelector(".right-bar .open")
let rightClose = document.querySelector(".right-bar .close")

rightOpen.addEventListener("click", function () {
    rightNavbar.classList.remove("hide-right")
    this.classList.add("d-none")
    rightClose.classList.remove("d-none")

})

rightClose.addEventListener("click", function () {
    rightNavbar.classList.add("hide-right")
    this.classList.add("d-none")
    rightOpen.classList.remove("d-none")
})





//Task2 bottomBar
let bottomNavbar = document.querySelector(".bottom-bar")
let bottomOpen = document.querySelector(".bottom-bar .open-bottom")
let bottomClose = document.querySelector(".bottom-bar .close-bottom")

bottomOpen.addEventListener("click", function () {
    bottomNavbar.classList.remove("hide-bottom")
    bottomNavbar.classList.add("show-bottom")
    this.classList.add("d-none")
    bottomClose.classList.remove("d-none")

})

bottomClose.addEventListener("click", function () {
    bottomNavbar.classList.remove("show-bottom")
    bottomNavbar.classList.add("hide-bottom")
    this.classList.add("d-none")
    bottomOpen.classList.remove("d-none")
})





