"use strict";

//#region Task1 Class Training
// let input = document.querySelector("input");
// let button = document.querySelector("button");
// let ul = document.querySelector("ul");

// button.addEventListener("click", function () {
    
//     ul.innerHTML = ""
//     let inputValue = input.value
//     console.log(typeof inputValue);


//     if (typeof inputValue == "string") {
//         for (let i = 1; i <= inputValue; i++) {
//             let li = document.createElement("li");
//             li.className = ("list-group-item my-1");
//             ul.append(li);
//             li.innerHTML = i;
            
//         }
//     }
// })

//////////////////////////////////////////

let bar = document.querySelector(".topbar")
let open = document.querySelector(".open");
let close = document.querySelector(".close");

open.addEventListener("click", function () {
    bar.classList.remove("hide");
    open.classList.add("d-none");
    close.classList.remove("d-none");
})


close.addEventListener("click", function () {
    bar.classList.add("hide");
    open.classList.remove("d-none");
    close.classList.add("d-none");
})


//////////////////////////////////////////

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

//#endregion













