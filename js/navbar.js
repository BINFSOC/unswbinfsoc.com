//Navigation
const nav = document.getElementById("navigation");

//Slideout menu
const slideout = document.getElementById("slideout-menu")
setTimeout(function(){slideout.style.visibility="hidden";}, 1000);

window.addEventListener('click', function(e){
    if (!slideout.contains(e.target) && !document.getElementById('menu-icon').contains(e.target)){
        slideout.style.visibility="hidden";
    }
  });


function slideoutMenu(){
    if (window.getComputedStyle(slideout).getPropertyValue('visibility')=="hidden"){
        slideout.style.visibility ="visible";
    } else {
        slideout.style.visibility="hidden";
    }
}