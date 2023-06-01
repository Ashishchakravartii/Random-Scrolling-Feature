let text = document.querySelector(".text");
let i = document.querySelector("i");
let nav = document.querySelector(".nav")
let logo = document.querySelector(".logo")

let flag = 0;
text.addEventListener("click", () => {
    if (flag == 0) {
        nav.style.top = 0;
        text.innerHTML = '<i class="ri-close-line"></i>'
        logo.style.color = "black"
        text.style.color = "black"

        flag = 1;

    }
    else {
        nav.style.top = '-1000px';
        text.innerHTML = '<i class="ri-menu-line"></i>'
        logo.style.color = "white"
        text.style.color = "white"
        flag = 0;

    }
})
