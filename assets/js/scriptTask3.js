"use strict";




let email = document.querySelector(".first");
let password = document.querySelector(".second");
let buttonEnter = document.querySelector(".enter")
let body = document.querySelector("body");

function validateForm() {
    if (email.value === "" || password.value === "") {
        alert("Email and password are required fields");
        return false;
    }
    return true;
}

body.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        document.querySelector("button").click()
    }
});

password.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        document.querySelector("button").click()
    }
});

document.querySelector("button").addEventListener("click", function (e) {
    if (validateForm()) {
        alert(e.target.previousElementSibling.value)
        return
    }
});






