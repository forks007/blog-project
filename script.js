const nav = document.querySelector('.nav')
const navButton = document.getElementById('button')
const navIcons = navButton.querySelectorAll('.icon') 
const menuList = document.querySelector('.menu-list')
window.addEventListener('scroll',fixNav)

navButton.addEventListener('click',()=>{
    navIcons.forEach((i)=>{
        i.classList.toggle('active') 
    })
    menuList.classList.toggle('active')
})




function fixNav() {
    if(scrollY > nav.offsetHeight +50){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}



const carousel = document.querySelector(".carousel")
const sliderContainer = document.getElementById('slider-container')
const slides = sliderContainer.querySelectorAll('.slide')

// console.log(slides.length)

// const left = document.getElementById('left')
// const right = document.getElementById('right')


const links = ["https://source.unsplash.com/user/erondu/1600x900","https://source.unsplash.com/collection/190727/1600x900","https://source.unsplash.com/collection/190726/1600x900","https://source.unsplash.com/collection/190725/1600x900"]


let idx = 0;
let interval = setInterval(run, 5000);


function run(){
    
    idx++
    changeSlide()
}

// const width = slides.clientWidth
function changeSlide(){
    if(idx>slides.length-1) {idx=0}
    else if(idx<0){idx=slides.length-1}
    sliderContainer.style.transform = `translateX(calc(${idx}*-70vw))`
    
    setActiveSlide()
    setBgToCarousel(idx)
}
function setActiveSlide(){
    slides.forEach((slide)=>slide.classList.remove('active'))

    slides[idx].classList.add('active')
    
}

function setBgToCarousel(idx){
    carousel.style.backgroundImage = `url(${links[idx]})`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 5000);
}

const cardsContainer = document.querySelector('.content-2 .cards')
const cards = document.querySelectorAll('.content-2 .cards .card')
const leftArrow = document.querySelector('.content-2 .arrows.left')
const rightArrow = document.querySelector('.content-2 .arrows.right')

let count = 0 

leftArrow.addEventListener('click',()=>{
    console.log('hello')
    count--
    console.log(count)
    console.log(cards.length)
    changeCard()
    // resetInterval()
})
rightArrow.addEventListener('click',()=>{
    count++
    console.log(count)

    changeCard()
    // resetInterval()
})
function changeCard(){
    if(count>cards.length-1) {count=0}
    else if(count<0){count=cards.length-1}
    cardsContainer.style.transform = `translateX(${count}*-400px)`
    
}



