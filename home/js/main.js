






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












