function handleButtonClick(){
    document.getElementById("button1").click();
}
function handleButtonClick1(){
    document.getElementById("button2").click();
}
function handleButtonClick2(){
    document.getElementById("button3").click();
}
function handleButtonClick3(){
    document.getElementById("button4").click();
}
function handleButtonClick4(){
    document.getElementById("button5").click();
}
function handleButtonClick5(){
    document.getElementById("button6").click();
}
function handleButtonClick6(){
    document.getElementById("button7").click();
}
function handleButtonClick7(){
    document.getElementById("button8").click();
}
function handleButtonClick8(){
    document.getElementById("button9").click();
}
function handleButtonClick9(){
    document.getElementById("button10").click();
}

let scrollContainer = document.querySelector(".img-indi");
let btnLeft = document.getElementById("btnleft");
let btnRight = document.getElementById("btnright");

scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
})
btnRight.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft += 280
})
btnLeft.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft -= 280
})
document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
        interval: false // Set interval to false to prevent auto-sliding
    });
});
document.querySelector('.slider').addEventListener('mouseover', function() {
    this.stop();
  });

  // Function to start the marquee on mouseout
  document.querySelector('.slider').addEventListener('mouseout', function() {
    this.start();
  });
