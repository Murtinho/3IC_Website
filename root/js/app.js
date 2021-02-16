//Gestione del colore di sfondo della Navbar
window.addEventListener("scroll", ()=>{
    var header = document.querySelector("header");
    header.classList.toggle("chgBg", window.scrollY > 0);
});
//gestione responsive navbar
var burger = document.querySelector(".burger");
var nav = document.getElementById("navList");
var header = document.querySelector("header");
var bars = document.querySelector(".fa-bars");
var times = document.querySelector(".fa-times");
var state = true;
burger.addEventListener("click", ()=>{
    if(window.innerWidth <= 1250){
        nav.classList.toggle("active");
        if(window.scrollY === 0){
            header.classList.toggle("chgBg");
        }
        if(state){
           times.classList.toggle("visible");
           bars.classList.toggle("visible");
        }else{
          bars.classList.toggle("visible");
          times.classList.toggle("visible");
        }
        state = !state;
    }
});

nav.addEventListener("click", ()=>{
    if(window.innerWidth <= 1250){
        nav.classList.remove("active");
        if(window.scrollY === 0){
            header.classList.toggle("chgBg");
        }
        if(state){
           times.classList.toggle("visible");
           bars.classList.toggle("visible");
        }else{
            bars.classList.toggle("visible");
            times.classList.toggle("visible");
        }
        state = !state;
    }
});
