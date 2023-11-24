$(window).scroll(function(){
    $(".navbar").toggleClass('hed',  $(this).scrollTop()>20)
})




var typed = new Typed('.titel', {
    strings:["i am A Web Devel","i am A Web Developer","i am A Web Developer"],
    typSpeed:100,
    backSpeed:100,
    loop: true,
    });


    

$(window).scroll(function(){
    const element = document.querySelector('.card1');
element.classList.add('animated', 'animate__slideInLeft');

element.addEventListener('animationend', () => {
  // do something
});
})


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

let a = "dgjkjdjkg"
console.log("a")
