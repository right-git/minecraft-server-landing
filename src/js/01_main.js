// Common functions
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

// Rules Script Start
let rulesBtn = document.querySelector('#rules-btn');
let hiddenRules = document.querySelector('.hidden');

rulesBtn.addEventListener('click', function(){

    if (hiddenRules.style.display == 'block'){
        hiddenRules.style.display = 'none';
        hiddenRules.style.opacity = '0';
        rulesBtn.innerHTML = 'Читать больше';
    }else {
        hiddenRules.style.display = 'block';
        hiddenRules.style.opacity = '1';
        rulesBtn.innerHTML = 'Читать меньше';
    }
});
// Rules Script End

// Header Script Start 
let linksList = document.querySelector('#links');
let burgerBtn = document.querySelector('#burger-menu');

function ToggleNav() {
    if(burgerBtn.classList.contains('animate__flipInX')){
        burgerBtn.classList.remove('animate__flipInX');
        linksList.classList.add('animate__fadeOut');
        burgerBtn.classList.add('animate__shakeY');
        burgerBtn.classList.remove('burger-active');
        sleep(800).then(() => {
            linksList.classList.remove('active');
            linksList.classList.remove('animate__fadeIn');
            burgerBtn.classList.remove('animate__shakeY');
        });
    }else {
        burgerBtn.classList.add('animate__flipInX');
        burgerBtn.classList.add('burger-active');
        linksList.classList.add('active');
        linksList.classList.remove('animate__fadeOut');
        linksList.classList.add('animate__fadeIn');
    }
}

burgerBtn.addEventListener("click", ToggleNav);

if (window.innerWidth <= 768) {
    let links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", ToggleNav);
    });
}
