const nav = document.querySelector('.nav')
const navButton = document.getElementById('button')
const navIcons = navButton.querySelectorAll('.icon') 
const menuList = document.querySelector('.menuList')
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










left.addEventListener('click',()=>{
    idx--
    changeImage()
    resetInterval()
})
right.addEventListener('click',()=>{
    idx++
    changeImage()
    resetInterval()
})




// const buttons = document.querySelectorAll('button')

// buttons.forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         const x = e.x
//         const y = e.y

//         const btnTop = e.target.offsetTop;
//         const btnLeft = e.target.offsetLeft;
        

//         const circleY = y - btnTop;
//         const circleX= x- btnLeft;
//         // console.log(circleX,circleY);

//         const circle = document.createElement('span')
//         circle.classList.add('circle')
//         circle.style.top = `${circleY}px`
//         circle.style.left = `${circleX}px`

//         button.appendChild(circle)

//         setTimeout(()=>{
//             circle.remove()
//         },1000)
    
//     })  
// })

const counters = document.querySelectorAll('.counter')

counters.forEach(counter=>{
    counter.innerText = '0'
    const updateCounter = ()=>{
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target/200

        if(c<target){
            counter.innerText = `${Math.ceil(c+increment)}`
            setTimeout(updateCounter,1)
        }else{
            counter.innerText = target
        }
    }
    updateCounter()
})