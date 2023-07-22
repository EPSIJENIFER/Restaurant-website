let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}
window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if (window.scrollY > 60) {
        document.querySelector("#scroll-top").classList.add("active");
    } else { document.querySelector("#scroll-top").classList.remove("active"); }
}

function load() {
    document.querySelector(".load").classList.add('fade');
}

function fadeout() {
    setInterval(load, 3000);
}
window.onload = fadeout();
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function login() {
    document.getElementById('id01').style.display = 'block';
}