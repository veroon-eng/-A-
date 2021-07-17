

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = slides.length}    
  if (n < 1) {slideIndex = 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}








my_new_nav=document.querySelector(".sticky_navbar")
bodyScroll=document.querySelector("html , body")
window.addEventListener("scroll",function(){
    if(bodyScroll.scrollTop >=100){
        my_new_nav.style.display="block"
        my_new_nav.classList.remove("animate__animated","animate__slideOutUp")
        my_new_nav.classList.add("animate__animated","animate__slideInDown")
    }
    else{
        // my_new_nav.style.display="none"
        my_new_nav.classList.remove("animate__animated","animate__slideInDown")
        my_new_nav.classList.add("animate__animated","animate__slideOutUp")
    
    }
})











fixedNavLink=document.querySelectorAll(".fixed_navbar ul li")
closeIcon=document.querySelector(".close_icon")
closeIcon2=document.querySelector(".close_icon2")
barIcon2=document.querySelector(".bar_icon2")
fixedNavbar=document.querySelector(".fixed_navbar")
barIcon=document.querySelector(".bar_icon")


barIcon.addEventListener("click",function(){
    fixedNavbar.style.display="block"
    barIcon.style.display="none";
    closeIcon.style.display="block"
    fixedNavbar.classList.add("animate__animated","animate__bounceInDown")
})
closeIcon.addEventListener("click",function(){
    fixedNavbar.style.display="none"
    closeIcon.style.display="none"
    barIcon.style.display="block"
    fixedNavbar.classList.add("animate__animated","animate__backOutDown")
})
barIcon2.addEventListener("click",function(){
    fixedNavbar.style.display="block"
    barIcon2.style.display="none";
    closeIcon2.style.display="block"
    fixedNavbar.classList.add("animate__animated","animate__bounceInDown")
})
closeIcon2.addEventListener("click",function(){
    fixedNavbar.style.display="none"
    closeIcon2.style.display="none"
    barIcon2.style.display="block"
})




var link;
for(link=0;link<fixedNavLink.length;link++){
    fixedNavLink[link].addEventListener("click",function(){
        fixedNavbar.style.display="none";
        closeIcon.style.display="none"
        barIcon.style.display="block"
        closeIcon2.style.display="none"
        barIcon2.style.display="block"

    })
}












