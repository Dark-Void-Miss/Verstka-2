const menuBtd = document.querySelector('.menu__btn')
const menu = document.querySelector('.header__menu')


menuBtd.addEventListener('click',()=>{
    menu.classList.toggle('menu__open')
})