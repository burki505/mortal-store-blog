$(document).ready(function () {
  function eventListeners() {
    // $(".prologue-box").mouseover(function () {
    //   gsap.to(".prologue-collapse-menu",{
    //     scale: 1,
    //     opacity: 1,
        
    //   })
    // });

    // $(".prologue-box").mouseout(function(){
    //   gsap.to(".prologue-collapse-menu",{
    //     scale: 0,
    //     opacity: 0,
        
    //   })
    // })


    $(".load-more").click(function () {
      $(".my-card").show();
      this.style.display = "none";
    });

      //preview

  $(".preview").click(function(){
    gsap.to(".for-sales-background",{
        duration:1,
        visibility:"visible",
        opacity:0.9
    })
});

$(".close-button").click(function(){
  gsap.to(".for-sales-background", {
    duration:1,
    visibility:"hidden",
    opacity:0
  });
});

$(".for-sales-background").click(function(){
  gsap.to(".for-sales-background", {
    duration:1,
    visibility:"hidden",
    opacity:0
  });
});
  }

  eventListeners();

  function gsapAnimations() {

          gsap.to(".preloader-video", {
        duration: 7,
        opacity: 0,
      
      });
  
      gsap.to(".preloader-img", {
        delay: 3,
        duration: 7,
        opacity: 1,
        
      });
  
      gsap.to(".preloader-fire", {
        delay: 3,
        duration: 7,
        opacity: 0.4,
      
      });
  
      gsap.to(".preloader", {
        delay: 7,
        duration: 1.2,
        opacity: 0,
        scale: 5,
   
      });
  

    gsap.to(".mynav-logo", {
      delay: 2,
      rotation: 360,
      duration: 2,
      repeat: -1,
      repeatDelay: 6,
    });

    gsap.from(".test-img1", {
      scrollTrigger: {
        scrub: true,
      },
      x: -300,
      duration: 1,
    });

    gsap.from(".test-exp1", {
      scrollTrigger: {
        scrub: true,
      },
      x: 50,
      duration: 0.4,
    });
    gsap.from(".test-img2", {
      scrollTrigger: {
        scrub: true,
      },
      x: 300,
      duration: 1,
    });

    gsap.from(".test-exp2", {
      scrollTrigger: {
        scrub: true,
      },
      x: -30,
      duration: 0.4,
    });
  }

  gsapAnimations();


  // function endAnimation(){
  //   const isPlayed = sessionStorage.getItem("isAnimationPlayed");

  //   if(!isPlayed){
  //     gsap.to(".preloader-video", {
  //       duration: 7,
  //       opacity: 0,
  //       onComplete : function(){
  //         sessionStorage.setItem("isAnimationPlayed",true);
  //         $(".preloader-video").css("display","none");
  //       }
  //     });
  
  //     gsap.to(".preloader-img", {
  //       delay: 3,
  //       duration: 7,
  //       opacity: 1,
  //       onComplete : function(){
  //         sessionStorage.setItem("isAnimationPlayed",true);
  //       }
  //     });
  
  //     gsap.to(".preloader-fire", {
  //       delay: 3,
  //       duration: 7,
  //       opacity: 0.4,
  //       onComplete : function(){
  //         sessionStorage.setItem("isAnimationPlayed",true);
  //       }
  //     });
  
  //     gsap.to(".preloader", {
  //       delay: 7,
  //       duration: 1.2,
  //       opacity: 0,
  //       scale: 5,
  //       onComplete : function(){
  //         sessionStorage.setItem("isAnimationPlayed",true);
  //       }
  //     });

      
  //   }
  // }

  // endAnimation();



  //parallax

  function prologueParallax() {
    gsap.utils.toArray(".prologue-box").forEach((part, i) => {
      part.bg = part.querySelector(".bg-prologue");

      if (i) {
        part.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

        gsap.to(part.bg, {
          backgroundPosition: `50% ${innerHeight / 2}px`,
          ease: "none",
          scrollTrigger: {
            trigger: part,
            scrub: true,
          },
        });
      } else {
        part.bg.style.backgroundPosition = "50% 0px";

        gsap.to(part.bg, {
          backgroundPosition: `50% ${innerHeight / 2}px`,
          ease: "none",
          scrollTrigger: {
            trigger: part,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });
  }

  prologueParallax();

  //!parallax


  //show less
  function showLess() {
    $(".my-card").slice(6, $(".my-card").length).hide();
    $("load-more").show();
  }

  showLess();
  //!show less

  //STORE SLIDERS

const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.slider-buttons-box');
let currentSlide = 1;
btns[currentSlide-1].classList.add('active');


const manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});


const repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  const repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 10000);
  }
  repeater();
}
repeat();

//!STORE SLIDERS


//button hover

const sliderButtons = $(".slider-button");
const sliderLinks = $(".slider-link");

  sliderButtons.each(function(index){
    $(this).mousemove(function(e){

      const offset = $(this).offset();
    
      const xPos = e.pageX - offset.left;
      const yPos = e.pageY - offset.top;
    
    
    
    e.target.style.setProperty("--x",`${xPos}px`);
    e.target.style.setProperty("--y",`${yPos}px`);
    });
  });

//!button hover






});



