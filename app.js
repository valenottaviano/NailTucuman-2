const burger = document.querySelector('.burger')
const navLinksContainer = document.querySelector('.nav-links-container')
const cross= document.querySelector('.cross')
const navLinks = document.querySelector('.nav-links')
const navLink = document.querySelectorAll('.nav-links li')

burger.addEventListener('click',()=>{
    navLinksContainer.classList.toggle('active');
    navLinks.classList.toggle('active')
})

cross.addEventListener('click', ()=>{
    navLinksContainer.classList.remove('active');
    navLinks.classList.remove('active')
})
navLink.forEach(link =>{
    link.addEventListener('click', ()=>{
        navLinksContainer.classList.remove('active');
     navLinks.classList.remove('active')
    })
})