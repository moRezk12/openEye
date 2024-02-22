// Swiper
var testimonial_swiper = new Swiper(".testimonials-swiper", {
    slidesPerView: "auto",
    centerslides: true,
    spaceBetween: 32,
    loop: true,
}); 


// Scroll
let scrolltop = document.querySelector('#scroll-top');

window.onscroll = function(){
    if(scrollY >=200){
        scrolltop.style.display = 'block'; 
    }else{
        scrolltop.style.display = 'none';  
    }
}

scrolltop.onclick = function (){
    scroll({
        left: 0,
        top: 0 ,
        behavior: 'smooth'
    }    
        
    )
    
}

// SCROLL REVEAL ANIMATION


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '3000',
    delay: 400,
    // reset: true //Animation repeat
})

sr.reveal(`.home-data , .explore-data, .explore-user , .footer-container`);
sr.reveal(`.home-card` , {delay: 600,distance:'100px', interval: 100});
sr.reveal(`.about-data , .join-image` , {origin: 'right'});
sr.reveal(`.about-image , .join-data` , {origin: 'left'});
sr.reveal(`.popular-card` , {interval: 200});


