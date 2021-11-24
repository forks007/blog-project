
const sliderContainer = document.querySelector('.container')
const slideRight = document.querySelector('.right')
const slideLeft = document.querySelector('.left')
const regButton = document.querySelector('#reg')
const loginButton = document.querySelector('#login')
const slidesLength = 2

let activeSlideIndex = 0
console.log(slidesLength)

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
// slideLeft.style.top = `-100vh`

loginButton.addEventListener('click', () => changeSlide('up'))
regButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

slideRight.addEventListener('onmouseout',()=>{
    shiftA
})