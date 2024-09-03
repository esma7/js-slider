

const  leftBtn = document.getElementById("left-click")
const  rightBtn = document.getElementById("right-click")
const  slider = document.querySelector(".box")
const  slide = document.querySelectorAll(".item")

let index = 0;

const moveSlide = ()=>{
    slider.style.transform = `translateX(-${index * 310}px)`
}

const nextSlide = ()=>{
    if(index == slide.length-3){
        index = 0
    }else{
        index ++;
        
    }
    moveSlide()
        
    
}
const prevSlide = ()=>{
    if(index === 0){
        slide.length -3
    }else{
        index --;
        
    }
    moveSlide()
        
    
}

rightBtn.addEventListener("click", nextSlide)
leftBtn.addEventListener("click", prevSlide)
