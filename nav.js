const menu = document.querySelector('nav')
const menuBtn = document.getElementById('menu-btn')

menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('active')
    search.classList.remove('active')
    userForm.classList.remove('active')
})

const userForm = document.querySelector('.signin-form')
const userBtn = document.getElementById('user')

userBtn.addEventListener('click',()=>{
    userForm.classList.toggle('active')
    menu.classList.remove('active')
    search.classList.remove('active')
})


const search = document.querySelector('.search')
const searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click',()=>{
    search.classList.toggle('active')
    menu.classList.remove('active')
    userForm.classList.remove('active')
})

window.addEventListener('scroll',()=>{
    menu.classList.remove('active')
    search.classList.remove('active')
    userForm.classList.remove('active')
})