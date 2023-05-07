let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.navbar');
let navbar = document.querySelector('.header .navbar');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');
document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active'); 
};

document.querySelector('#info-btn').onclick = () =>{
  contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
  contactInfo.classList.remove('active');
}
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}