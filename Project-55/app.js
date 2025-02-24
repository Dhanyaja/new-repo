const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-side");
const slideLeft = document.querySelector(".left-side");
const upButton = document.getElementById("up-btn");
const downButton = document.getElementById("down-btn");
const sliderLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;
slideLeft.style.top = `-${(sliderLength - 1) * 100}vh`;

downButton.addEventListener("click", () => nextSlide("up"));
upButton.addEventListener("click", () => nextSlide("down"));

function nextSlide(params){
    const sliderHeight = sliderContainer.clientHeight;
    
    if(params === "up"){
        activeSlideIndex++;
        if(activeSlideIndex > sliderLength - 1){
            activeSlideIndex = 0;
        }
    }
    if(params === "down"){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = sliderLength - 1;
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}