
// MENU BURGER

// On recupère le triple span qui sert de bouton
const menuHamburger = document.querySelector("#divSpanBurger");
// On récupère la navbar
const navLinks = document.querySelector("#navbar");
// On récupère les 3 spans du bouton pour pouvoir jouer avec, indépendement
const topSpan = document.getElementById("topSpan");
const middleSpan = document.getElementById("middleSpan");
const bottomSpan = document.getElementById("bottomSpan");
 
// On écoute le clic sur le bouton
menuHamburger.addEventListener('click',()=>{
        // on applique la classe qui fait pop la navbar
        navLinks.classList.toggle('mobile_menu');
        // on applique les classes qui modifie l'apparence du bouton
        topSpan.classList.toggle('crossSpan1');
        middleSpan.classList.toggle('deleteSpan');
        bottomSpan.classList.toggle('crossSpan2')
})


// animation rotation roue

const roue = document.querySelector("#dragon_wheel");
const startAndStop = document.querySelector("#spin_button");
const textStartStop = document.querySelector("#text_startStop");
const gift = document.getElementById("gift");
const preGift = document.getElementById("pre_gift");

startAndStop.addEventListener('click', ()=>{
        roue.classList.toggle("roule");
} )

startAndStop.addEventListener('click', ()=>{
        if (textStartStop.innerHTML=="Cliquez pour lancer la roue du destin") {
                textStartStop.innerHTML= "Cliquez pour arreter la roue du destin";
                startAndStop.classList.remove("pulse");
                startAndStop.style.boxShadow="0 0 15px #ff0000c2";
                preGift.innerHTML="Qu'allez vous gagner?"
                gift.innerHTML="";
        } else {
                textStartStop.innerHTML= "Cliquez pour lancer la roue du destin";
                startAndStop.classList.add("pulse");
                startAndStop.style.boxShadow="0 0 15px #44ff0041"
                let getRandomNumber = Math.floor(Math.random()*100);
                console.log(getRandomNumber);
                if(getRandomNumber>=0 && getRandomNumber<20){
                        gift.innerHTML="une peluche Eternal Descent";
                } else if (getRandomNumber>=20 && getRandomNumber<40) {
                        gift.innerHTML="-10% sur le jeu";
                } else if (getRandomNumber>=40 && getRandomNumber<60) {
                        gift.innerHTML="le Season Pass";
                } else if (getRandomNumber>=60 && getRandomNumber<80) {
                        gift.innerHTML="un poster Eternal Descent";
                } else {
                        gift.innerHTML="un T-shirt Eternal Descent"
                }
                preGift.innerHTML="Vous avez gagné:"
                gift.classList.add("gift_border")
        }
} )

