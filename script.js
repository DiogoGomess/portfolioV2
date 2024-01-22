let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");

  let pos = document.documentElement.scrollTop; 
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  let scrollValue = Math.round((pos *100 ) / calcHeight)

  if(pos > 100){
    scrollProgress.style.display= "grid";
  }
  else{
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click",()=>{
    document.documentElement.scrollTop =0;
  })

  scrollProgress.style.background = `conic-gradient(  rgba(1, 36, 50, 0.9)  ${scrollValue}%, #d7d7d7  ${scrollValue}%)`
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


var swiper = new Swiper(".mySkills", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});


// var swiper = new Swiper(".swiper-container", {
//   pagination: '.swiper-pagination',
//   effect:'coverflow',
//   grabCursor: true,
//   centeredSlides:true,
//   slidesPerView: "auto",
//   coverflow:{
//     rotate:20,
//     stretch:0,
//     depth:200,
//     modifier:1,
//     slideShadows:true
//   },
//   loop:true,

// });

// $(document).ready(function(){
//   $(".videoContainer").ripples({
//     resolution: 512,
//     dropRadius: 20,
//     perturbance: 0.04,
    
// });
// });


// Modal

// const myModal = new bootstrap.Modal("#images-modal");
const myModal = document.getElementById("images-modal");
const koinkBtn = document.getElementById("koink-btn");
const closeBtn = document.getElementsByClassName("closeBtn")[0];


koinkBtn.onclick = function(){
  myModal.style.display = "block";
}

closeBtn.onclick = function(){
  myModal.style.display="none";
}

window.onclick = function(event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
  }
}

