
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');



menu.onclick = () =>{
    menu.classList.toggle('fa-times-rectangle')
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-times-rectangle')
    navbar.classList.remove('active')
}