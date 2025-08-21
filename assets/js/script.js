var typed = new Typed(".typing",{
    strings:["","Developpeur Web","Developpeur Web Mobile"],
    typeSpeed:100,
    backspeed:60,
    loop:true
})


let nav = document.querySelector(".nav");
navList = nav.querySelectorAll("li");
totalNavList = navList.length;
allSection = document.querySelectorAll(".section");
totalSection = allSection.length;
for(let i=0 ; i<totalNavList ; i++){
    console.log(navList[i]);
    let a = navList[i].querySelector("a");
    console.log(a);
    a.addEventListener("click",function(){
        for(let i = 0 ; i<totalSection ; i++ ){
        allSection[i].classList.remove("back-section");
    }
        //console.log(this); Afficher l'élément au clic dans la console
        for(let j = 0; j<totalNavList ; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                //console.log("section du fond " + navList[i].querySelector("a"));
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
    })
}
function showSection(element){
    for(let i = 0 ; i<totalSection ; i++ ){
        allSection[i].classList.remove("active");
    }
    let href = element.getAttribute("href").split("#");
    target = href[1];
    console.log(target);
    document.querySelector("#" + target).classList.add("active")
}