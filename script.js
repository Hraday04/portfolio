let menuIcon = document.querySelector('#menu-icon');
let menuIconList = document.querySelector('#menu-icon-list');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () =>{
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
        if(menuIconList.style.display == 'none'){
            menuIconList.style.display = 'block';
        }
        else {
            menuIconList.style.display = 'none';
        }
}

//Set up the audio elements

let logo = document.querySelector('.logo');
let homeImg = document.querySelector('.home-img');
let myAudioElement = document.querySelector('#myAudioElement'); 
let navbarAudioElement = document.querySelector('#navbarAudioElement');

logo.onmouseover = () => {
    myAudioElement.play();
};

homeImg.onmouseover = () => {
    myAudioElement.play();
};

navbar.onclick = () => {
    navbarAudioElement.play();
};

