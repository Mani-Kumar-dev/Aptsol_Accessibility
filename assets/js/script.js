window.addEventListener("load", () => {
    const preloader = document.querySelector(".loader");
  
    preloader.classList.add("loader_ball-hidden");
  
    preloader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });



/*------Scroll-text---Starts----*/
ScrollReveal({
    distance:'50px',
    duration:2500,
    delay:500,
    
});
ScrollReveal().reveal('.head-access',{
    delay:100,origin: 'top'
});
ScrollReveal().reveal('.access-head ',{
    delay:100,origin: 'top'
});
ScrollReveal().reveal('.access-text ',{
    delay:100,origin: 'bottom'
});
ScrollReveal().reveal('.Artificial ',{
    delay:100,origin: 'left'
});

ScrollReveal().reveal('.list_group.benefits li',{
    delay:100,origin: 'left',interval:200
});
ScrollReveal().reveal('p.text-services',{
    delay:100,origin: 'left',interval:200
});
ScrollReveal().reveal('.btn-service',{
    delay:100,origin: 'right'
});
ScrollReveal().reveal('.onboard',{
    delay:100,origin: 'right'
});

/*------Scroll-text---Ends----*/
