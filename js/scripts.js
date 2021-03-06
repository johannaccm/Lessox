$(function () {
  $(".lupa").click(function() {
      $(".buscador").show("fast");
  });

  $(".close").click(function(){
      $(".buscador").hide("fast");
  });

  $(".dropdown").hover(function(){ 
      $(this).find(".dropdown-content").toggle(); 
  });


})


// LOGO
var logo = new Vue({
    el: '.logo',
    data: {
        logoLessox: './images/lessox-logo.png',
        url: '#',
    },

})

var carrousel = new Vue({
  el: '.myslides',
  data: {
      img1: './images/awa.png',
      url: '#',
  },

})


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

$(".closeX").click(function(){
  $(".right-col").hide("fast");
})

const rightBanner = document.getElementById("right-banner");
const eOffset = rightBanner.offsetTop;

window.onscroll = () => onSticky(rightBanner, eOffset);

function onSticky(e, eOffset) {
  if (window.pageYOffset > eOffset) {
    e.classList.add("sticky");
  } else {
    e.classList.remove("sticky");
  }
}