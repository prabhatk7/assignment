window.onscroll= function(){scroll()};
var banner=document.getElementById("bottom-banner");
var left_banner=document.getElementById("side-banner");
function scroll(){
    banner.classList.add("stick");
    left_banner.classList.add("stick");
}