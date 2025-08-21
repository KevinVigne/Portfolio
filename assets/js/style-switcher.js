
let styleSwitchToggle = document.querySelector(".style-switcher-toggler");
styleSwitchToggle.addEventListener("click",function(){
    document.querySelector(".style-switcher").classList.toggle("open")
})
window.addEventListener("scroll",function(){
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

//Changement de Couleur
let alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style)=>{
        if(color == style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true")
        }
    })
}

let dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",function(){
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",function(){
    if(this.document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})