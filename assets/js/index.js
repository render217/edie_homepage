const addEventOnElements = (elements,eventType,callback)=>{
    for (let i = 0; i < elements.length; i++) {

        elements[i].addEventListener(eventType,callback);
    }
}


const navbar = document.querySelector('[data-navbar]');
const navbarTogglers = document.querySelectorAll('[data-nav-toggler]')


const navToggle = ()=>{
    navbar.classList.toggle('active');
    
}


addEventOnElements(navbarTogglers,'click',navToggle);


const header = document.querySelector('header');

window.addEventListener('scroll',()=>{
    if(window.scrollY > 100){
        header.classList.add("active");
    }else{
        header.classList.remove('active')
    }
})