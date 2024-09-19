// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true
// });
// window.addEventListener('load', () => {
//     scroll.update();
//   });

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let menu = document.querySelector(".navbar-toggler-btn")
let full = document.querySelector("#full-scr")
let icons = document.querySelector(".menu-icons")
let flag = 0
menu.addEventListener("click",function(){
    if(flag == 0){
        full.style.top = 0
        flag=1
        icons.src = 'assets/images/close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
        
    }else{
        full.style.top = "-100%"
        flag=0
        icons.src = 'assets/images/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
    }
})

let elements = document.querySelectorAll(".text1");

elements.forEach((element) => {
    let innerText = element.innerText;
    element.innerHTML = "";

    let textContainer = document.createElement("div");
    textContainer.classList.add("block");

    for(let letter of innerText){
        let span = document.createElement("span");
        span.innerText = letter.trim() === "" ? "\xa0" :
        letter;
        span.classList.add("letter");
        textContainer.appendChild(span);
    }

    element.appendChild(textContainer);
    let clonedContainer = textContainer.cloneNode(true);
    clonedContainer.classList.add("clone");
    element.appendChild(clonedContainer);
});

elements.forEach((element) => {
   element.addEventListener("mouseover", () => {
    element.classList.remove("play");

   
})

});

  function TextAnime() {
    gsap.fromTo("#header .lg-title", 
        { 
            y: 50,                
            opacity: 0            
        }, 
        { 
            y: 0,                
            opacity: 1,          
            delay: 0.5,
            duration: 1.2,
            ease: "power4.out", 
            stagger: 0.2         
        }
    );
}

TextAnime();

const textElement = document.querySelector('.lg-title2');

    textElement.addEventListener('mouseenter', () => {
        gsap.to(textElement, {
            y: '-50%',   
            duration: 0.3,
            ease: "power2.inOut",
            repeat: 1,    
            yoyo: true
        });
    });

    textElement.addEventListener('mouseleave', () => {
        gsap.to(textElement, {
            y: '0%',
            duration: 0.3,
            ease: "power2.inOut",
        });
    });

function cursorAnime() {
  document.addEventListener("mousemove", function(dets) {
      gsap.to(".usercursor", {
          left: dets.x,
          top: dets.y,
          xPercent: -70,
          yPercent: -70, 
      });
  });

  document.querySelectorAll(".header-content.text-center").forEach(function(elem) {
      elem.addEventListener("mouseenter", function() {
          gsap.to(".usercursor", {
              transform: 'scale(1)',
              duration: 0.2
          });
      });

      elem.addEventListener("mouseleave", function() {
          gsap.to(".usercursor", {
              transform: 'scale(0)',
              duration: 0.2
          });
      });
  });
}

cursorAnime();

let copylogos = document.querySelector(".logo-slide").cloneNode(true);
document.querySelector('.logos').appendChild(copylogos);

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  function videoAnime() {
    var video = document.querySelector(".swiper");
    var swiperContent = document.querySelector(".swiper-wrapper"); 
    var playbtn = document.querySelector(".usercursor-swiper");
    var swiperInstance = document.querySelector(".mySwiper").swiper;

    
    video.addEventListener("mouseenter", function() {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1,
            duration: 0.2
        });

        
        // if (swiperInstance.autoplay) {
        //     swiperInstance.autoplay.stop();
        // }
    });

    
    video.addEventListener("mouseleave", function() {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0,
            duration: 0.2
        });

        
        // if (swiperInstance.autoplay) {
        //     swiperInstance.autoplay.start();
        // }
    });

    
    video.addEventListener("mousemove", function(dets) {
        var rect = video.getBoundingClientRect();
        var playbtnWidth = playbtn.offsetWidth / 2; 
        var playbtnHeight = playbtn.offsetHeight / 2;

        
        var x = dets.clientX - rect.left - playbtnWidth;
        var y = dets.clientY - rect.top - playbtnHeight;

        // Move the playbtn
        gsap.to(playbtn, {
            left: x + 'px',
            top: y + 'px',
            duration: 0.15, 
        });

        
        var mouseXPercentage = (dets.clientX - rect.left) / rect.width;

        
        var maxTranslateX = video.scrollWidth - rect.width; 
        var targetTranslateX = maxTranslateX * -mouseXPercentage; 

       
        gsap.to(swiperContent, {
            x: targetTranslateX,
            duration: 1.0,     
            ease: "power3.out"
        });
    });
}

videoAnime();

// let loaderAnime = document.querySelector('.loader')
// setTimeout(function(){
//     loaderAnime.style.top = "-100%";

// }, 4000)



