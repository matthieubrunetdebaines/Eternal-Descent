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


// Affichage du panier
const panier = document.querySelector("#cart");
const popupPanier = document.querySelector("#popup-panier");
const goodie = document.querySelectorAll(".art-bg");
const title = document.querySelector(".title-bg");

function popup() {
    if (popupPanier.classList !== "") {
        popupPanier.classList.remove("off");
        title.classList.add("blur");
        goodie.forEach(element => element.classList.add("blur"));
    }
}

panier.addEventListener("click", popup);

// Fermeture du panier

const close = document.querySelector("#btn-close");

function closeCart() {
    if (popupPanier.classList !== "off") {
        popupPanier.classList.add("off");
        title.classList.remove("blur");
        goodie.forEach(element => element.classList.remove("blur"));
    }
}

close.addEventListener("click", closeCart)

// Fonction de calcul des frais de ports
const deliveryPrice = document.querySelector("#delivery-price");
const totalPrice = document.querySelector("#total-price");

function isDeleveryFree() {
    // Penser à modifier le total
    totalPrice.innerHTML = parseInt(mugBlancTotalPrice.innerHTML) + parseInt(mugNoirTotalPrice.innerHTML) + parseInt(tShirtBlancTotalPrice.innerHTML) + parseInt(tShirtNoirTotalPrice.innerHTML) + parseInt(posterTotalPrice.innerHTML) + parseInt(pelucheTotalPrice.innerHTML);
    if (totalPrice.innerHTML >= 50) {
        deliveryPrice.innerHTML = "Offert"
    } else {
        deliveryPrice.innerHTML = 10 + "€";
    }
}

// Controle du panier
const counter = document.getElementById("count");

// Article Mug Blanc
const addMugBlanc = document.querySelector("#add-mug-blanc");
const mugBlanc = document.querySelector(".mb-tab");
const mugBlancTotal = document.querySelector("#mb-count");
const mugBlancTotalPrice = document.querySelector("#mb-price");

function addToCartMugBlanc() {
    if (mugBlanc.classList !== "mb-tab") {
        mugBlanc.classList.remove("off");
    }
    mugBlancTotal.innerHTML++;
    mugBlancTotalPrice.innerHTML = mugBlancTotal.innerHTML * 20;
    counter.innerHTML++;
    isDeleveryFree();
    alert("Article ajouté au panier");
}

addMugBlanc.addEventListener("click", addToCartMugBlanc);
// Fonction ajout ou retrait d'article dans le panier 
const mugBlancAdd = document.querySelector(".btn-plus.mb");
const mugBlancRemove = document.querySelector(".btn-moins.mb");


function removeMB() {
    mugBlancTotal.innerHTML--;
    mugBlancTotalPrice.innerHTML = mugBlancTotal.innerHTML * 20;
    counter.innerHTML--;
    isDeleveryFree();
    if (mugBlancTotal.innerHTML == 0) {
        mugBlanc.classList.add("off");
    }

}

function addMB() {
    mugBlancTotal.innerHTML++;
    mugBlancTotalPrice.innerHTML = mugBlancTotal.innerHTML * 20;
    counter.innerHTML++;
    isDeleveryFree();
}


mugBlancAdd.addEventListener("click", addMB);
mugBlancRemove.addEventListener("click", removeMB);

// Article Mug Noir

const addMugNoir = document.getElementById("add-mug-noir");
const mugNoir = document.querySelector(".mn-tab");
const mugNoirTotal = document.querySelector("#mn-count");
const mugNoirTotalPrice = document.querySelector("#mn-price");

function addToCartMugNoir() {
    if (mugNoir.classList !== "mb-tab") {
        mugNoir.classList.remove("off");
    }
    mugNoirTotal.innerHTML++;
    mugNoirTotalPrice.innerHTML = mugNoirTotal.innerHTML * 20;
    counter.innerHTML++;
    isDeleveryFree();
    alert("Article ajouté au panier");
}

addMugNoir.addEventListener("click", addToCartMugNoir);

// Fonction ajout ou retrait d'article dans le panier 
const mugNoirAdd = document.querySelector(".btn-plus.mn");
const mugNoirRemove = document.querySelector(".btn-moins.mn");

function removeMN() {
    mugNoirTotal.innerHTML--;
    mugNoirTotalPrice.innerHTML = mugNoirTotal.innerHTML * 20;
    counter.innerHTML--;
    isDeleveryFree();
    if (mugNoirTotal.innerHTML == 0) {
        mugNoir.classList.add("off");
    }

}

function addMN() {
    mugNoirTotal.innerHTML++;
    mugNoirTotalPrice.innerHTML = mugNoirTotal.innerHTML * 20;
    counter.innerHTML++;
    isDeleveryFree();
}

addMugNoir.addEventListener("click", addToCartMugNoir);
mugNoirAdd.addEventListener("click", addMN);
mugNoirRemove.addEventListener("click", removeMN);

// Article T-Shirt Blanc 
const addTShirtBlanc = document.getElementById("add-tshirt-blanc");
const tShirtBlanc = document.querySelector(".tsb-tab");
const tShirtBlancTotal = document.querySelector("#tsb-count");
const tShirtBlancTotalPrice = document.querySelector("#tsb-price");

function addToCartTShirtBlanc() {
    if (tShirtBlanc.classList !== "tsb-tab") {
        tShirtBlanc.classList.remove("off");
    }
    tShirtBlancTotal.innerHTML++;
    tShirtBlancTotalPrice.innerHTML = tShirtBlancTotal.innerHTML * 35;
    counter.innerHTML++;
    isDeleveryFree();
    alert("Article ajouté au panier");
}

addTShirtBlanc.addEventListener("click", addToCartTShirtBlanc);
// Fonction ajout ou retrait d'article dans le panier 
const tShirtBlancAdd = document.querySelector(".btn-plus.tsb");
const tShirtBlancRemove = document.querySelector(".btn-moins.tsb");

function removeTSB() {
    tShirtBlancTotal.innerHTML--;
    tShirtBlancTotalPrice.innerHTML = tShirtBlancTotal.innerHTML * 35;
    counter.innerHTML--;
    isDeleveryFree();
    if (tShirtBlancTotal.innerHTML == 0) {
        tShirtBlanc.classList.add("off");
    }

}

function addTSB() {
    tShirtBlancTotal.innerHTML++; 35
    tShirtBlancTotalPrice.innerHTML = tShirtBlancTotal.innerHTML * 35;
    counter.innerHTML++;
    isDeleveryFree();
}

addTShirtBlanc.addEventListener("click", addToCartTShirtBlanc);
tShirtBlancAdd.addEventListener("click", addTSB);
tShirtBlancRemove.addEventListener("click", removeTSB);

// Article T-Shirt Noir
const addTShirtNoir = document.getElementById("add-tshirt-noir");
const tShirtNoir = document.querySelector(".tsn-tab");
const tShirtNoirTotal = document.querySelector("#tsn-count");
const tShirtNoirTotalPrice = document.querySelector("#tsn-price");

function addToCartTShirtNoir() {
    if (tShirtNoir.classList !== "tsn-tab") {
        tShirtNoir.classList.remove("off");
    }
    tShirtNoirTotal.innerHTML++;
    tShirtNoirTotalPrice.innerHTML = tShirtNoirTotal.innerHTML * 35;
    counter.innerHTML++;
    isDeleveryFree();
    alert("Article ajouté au panier");
}

addTShirtNoir.addEventListener("click", addToCartTShirtNoir);
// Fonction ajout ou retrait d'article dans le panier 
const tShirtNoirAdd = document.querySelector(".btn-plus.tsn");
const tShirtNoirRemove = document.querySelector(".btn-moins.tsn");

function removeTSN() {
    tShirtNoirTotal.innerHTML--;
    tShirtNoirTotalPrice.innerHTML = tShirtNoirTotal.innerHTML * 35;
    counter.innerHTML--;
    isDeleveryFree();
    if (tShirtNoirTotal.innerHTML == 0) {
        tShirtNoir.classList.add("off");
    }

}

function addTSN() {
    tShirtNoirTotal.innerHTML++;
    tShirtNoirTotalPrice.innerHTML = tShirtNoirTotal.innerHTML * 35;
    counter.innerHTML++;
    isDeleveryFree();
}

addTShirtNoir.addEventListener("click", addToCartTShirtNoir);
tShirtNoirAdd.addEventListener("click", addTSN);
tShirtNoirRemove.addEventListener("click", removeTSN);

// Article Poster
const addPoster = document.getElementById("add-poster");
const poster = document.querySelector(".poster-tab");
const posterTotal = document.querySelector("#poster-count");
const posterTotalPrice = document.querySelector("#poster-price");

console.log(addPoster)
console.log(poster)
console.log(posterTotal)
console.log(posterTotalPrice)

function addToCartPoster() {
    if (poster.classList !== "poster-tab") {
        poster.classList.remove("off");
    }
    posterTotal.innerHTML++;
    posterTotalPrice.innerHTML = posterTotal.innerHTML * 60;
    counter.innerHTML++;
    isDeleveryFree();
    alert("Article ajouté au panier");
}

addPoster.addEventListener("click", addToCartPoster);

// Fonction ajout ou retrait d'article dans le panier 
const posterAdd = document.querySelector(".btn-plus.poster");
const posterRemove = document.querySelector(".btn-moins.poster");

function removePo() {
    posterTotal.innerHTML--;
    posterTotalPrice.innerHTML = posterTotal.innerHTML * 60;
    counter.innerHTML--;
    isDeleveryFree();
    if (posterTotal.innerHTML == 0) {
        poster.classList.add("off");
    }

}

function addPo() {
    posterTotal.innerHTML++;
    posterTotalPrice.innerHTML = posterTotal.innerHTML * 60;
    counter.innerHTML++;
    isDeleveryFree();
}

addPoster.addEventListener("click", addToCartPoster);
posterAdd.addEventListener("click", addPo);
posterRemove.addEventListener("click", removePo);

// Article Peluche
const addPeluche = document.getElementById("add-peluche");
const peluche = document.querySelector(".peluche-tab");
const pelucheTotal = document.querySelector("#peluche-count");
const pelucheTotalPrice = document.querySelector("#peluche-price");

function addToCartPeluche() {
    if (peluche.classList !== "peluche-tab") {
        peluche.classList.remove("off");
    }
    pelucheTotal.innerHTML++;
    pelucheTotalPrice.innerHTML = pelucheTotal.innerHTML * 40;
    counter.innerHTML++;
    isDeleveryFree();
    alert("Article ajouté au panier");
}

addPeluche.addEventListener("click", addToCartPeluche);

// Fonction ajout ou retrait d'article dans le panier 
const pelucheAdd = document.querySelector(".btn-plus.peluche");
const pelucheRemove = document.querySelector(".btn-moins.peluche");

function removePel() {
    pelucheTotal.innerHTML--;
    pelucheTotalPrice.innerHTML = pelucheTotal.innerHTML * 40;
    counter.innerHTML--;
    isDeleveryFree();
    if (pelucheTotal.innerHTML == 0) {
        peluche.classList.add("off");
    }

}

function addPel() {
    pelucheTotal.innerHTML++;
    pelucheTotalPrice.innerHTML = pelucheTotal.innerHTML * 40;
    counter.innerHTML++;
    isDeleveryFree();
}

addPeluche.addEventListener("click", addToCartPeluche);
pelucheAdd.addEventListener("click", addPel);
pelucheRemove.addEventListener("click", removePel);

// Fonction pour vider le panier
const viderPanier = document.querySelector("#btn-delete");
const allGoodies = document.querySelectorAll(".hide");
const allGoodiesReset = document.querySelectorAll(".reset");


function deleteCart() {
    counter.innerHTML = 0;
    allGoodiesReset.forEach(element => element.innerHTML = 0)
    allGoodies.forEach(element => element.classList.add("off"));
    isDeleveryFree();
}

viderPanier.addEventListener('click', deleteCart);