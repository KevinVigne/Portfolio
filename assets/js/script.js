//Déclaration des variables
let nav = document.querySelector(".nav");
let navList = nav.querySelectorAll("li");
let totalNavList = navList.length;
let allSection = document.querySelectorAll(".section");
let totalSection = allSection.length;
let styleSwitchToggle = document.querySelector(".style-switcher-toggler");
let alternateStyles = document.querySelectorAll(".alternate-style");
let dayNight = document.querySelector(".day-night");
let navTogglerBtn = document.querySelector(".nav-toggler");
let aside = document.querySelector (".aside");

//Au Chargement de la page , si le thème est sombre , l'icone de soleil est affichée et inversement
window.addEventListener("load",function(){
    if(this.document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

// Tous les éléments avec la classe typing aura un texte qui alternera entre tout les éléments de "strings"
var typed = new Typed(".typing",{
    strings:["","Developpeur Web","Developpeur Web et Web Mobile"],
    typeSpeed:100,
    backspeed:60,
    loop:true,
})
//Au clic ,Affiche le menu de couleur
styleSwitchToggle.addEventListener("click",function(){
    document.querySelector(".style-switcher").classList.toggle("open")
})
//Au scroll , Cache le menu de couleur
window.addEventListener("scroll",function(){
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

//Changement de Couleur du texte de la page
function setActiveStyle(color){
    alternateStyles.forEach((style)=>{
        if(color == style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true")
        }
    })
}

//Changement Thème Clair/Sombre
dayNight.addEventListener("click",function(){
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

//Récupère tout les éléments de l'atlas 
for(let i=0 ; i<totalNavList ; i++){
    console.log(navList[i]);
    let a = navList[i].querySelector("a");
    console.log(a);
    a.addEventListener("click",function(){
        removeBackSection();
        //console.log(this); Afficher l'élément dans la console au clic 
        for(let j = 0; j<totalNavList ; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                /*console.log("section du fond " + navList[i].querySelector("a"));
                Met en second plan de la page*/
                addBackSection(j);
                //allSection[j].classList.add("back-section");
            }
            //Enlève la Couleur
            navList[j].querySelector("a").classList.remove("active");
        }
        //Ajoute la Couleur
        this.classList.add("active");
        //Appelle la Fonction showSection en prenant en paramètre l'élément en question
        showSection(this);
        if(window.innerWidth < 1200){
            asideSectionToggleBtn();
        }
    })
}
function removeBackSection(){
    for(let i = 0 ; i<totalSection ; i++ ){
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(number){
    allSection[number].classList.add("back-section");
}
//Affiche l'élément sur la Page
function showSection(element){
    for(let i = 0 ; i<totalSection ; i++ ){
        allSection[i].classList.remove("active");
    }
    //on sépare  le # du href et le stocke dans une variable pour
    let href = element.getAttribute("href").split("#");
    let target = href[1];
    console.log(target);
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element){
    for(let i = 0; i <totalNavList ; i++){
        navList[i].querySelector("a").classList.remove("active");
        let target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function(){
    let sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
function asideSectionToggleBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i = 0; i < totalSection; i++){
        allSection[i].classList.toggle("open")
    }
}
navTogglerBtn.addEventListener("click",function(){
    asideSectionToggleBtn();
})
