

let valueCheck1 = 0;
let valueCheck2 = 0;
let valueCheck3 = 0;
let valueCheck4 = 0;
let priceBotNav = 1349;
let introvid = document.getElementById("pauseVid1");
let showreelvid = document.getElementById("pauseVid2");

document.getElementById("priceChange").innerHTML = priceBotNav;
document.getElementById("checkBox1").addEventListener("click", () => {
    valueCheck1++;
    document.getElementById("priceChange").innerHTML = priceBotNav + 29;
    document.getElementById("sdCardCheck").setAttribute("class", "checkedSD");
    if(valueCheck1 === 2) {
        document.getElementById("sdCardCheck").setAttribute("class", "sdCard");
        document.getElementById("priceChange").innerHTML = priceBotNav;
        valueCheck1 = 0;
    }
})
document.getElementById("checkBox2").addEventListener("click", () => {
    valueCheck2++;
    document.getElementById("priceChange").innerHTML = priceBotNav + 149;
    document.getElementById("controllerCheck").setAttribute("class", "checkedControl");
    if(valueCheck2 === 2) {
        document.getElementById("controllerCheck").setAttribute("class", "controller");
        document.getElementById("priceChange").innerHTML = priceBotNav;
        valueCheck2 = 0;
    }
})
document.getElementById("checkBox3").addEventListener("click", () => {
    valueCheck3++;
    document.getElementById("priceChange").innerHTML = priceBotNav + 279;
    document.getElementById("moreKitCheck").setAttribute("class", "checkedMoreKit");
    if(valueCheck3 === 2) {
        document.getElementById("moreKitCheck").setAttribute("class", "moreKit");
        document.getElementById("priceChange").innerHTML = priceBotNav;
        valueCheck3 = 0;
    }
})
document.getElementById("checkBox4").addEventListener("click", () => {
    valueCheck4++;
    document.getElementById("priceChange").innerHTML = priceBotNav + 155;
    document.getElementById("batteryCheck").setAttribute("class", "chechedBattery");
    if(valueCheck4 === 2) {
        document.getElementById("batteryCheck").setAttribute("class", "battery");
        document.getElementById("priceChange").innerHTML = priceBotNav;
        valueCheck4 = 0;
    }
})

document.getElementById("photoCheck").addEventListener("click", () => {
    document.getElementById("introVid").setAttribute("style", "display: none;");
    document.getElementById("showreelVid").setAttribute("style", "display: none;");
    document.getElementById("myCaroussel").removeAttribute("style");
    document.getElementById("photoCheck").setAttribute("class", "photoGroupClick");
    document.getElementById("introCheck").setAttribute("class", "introGroup");
    document.getElementById("showreelCheck").setAttribute("class", "showreelGroup");
})
document.getElementById("introCheck").addEventListener("click", () => {
    pauseVid2();
    document.getElementById("myCaroussel").setAttribute("style", "display: none;");
    document.getElementById("showreelVid").setAttribute("style", "display: none;");
    document.getElementById("introVid").removeAttribute("style");
    document.getElementById("photoCheck").setAttribute("class", "photoGroup");
    document.getElementById("introCheck").setAttribute("class", "introGroupClick");
    document.getElementById("showreelCheck").setAttribute("class", "showreelGroup");
})
document.getElementById("showreelCheck").addEventListener("click", () => {
    pauseVid1();
    document.getElementById("myCaroussel").setAttribute("style", "display: none;");
    document.getElementById("introVid").setAttribute("style", "display: none;");
    document.getElementById("showreelVid").removeAttribute("style");
    document.getElementById("photoCheck").setAttribute("class", "photoGroup");
    document.getElementById("introCheck").setAttribute("class", "introGroup");
    document.getElementById("showreelCheck").setAttribute("class", "showreelGroupClick");
})

let checkQuestion = 0;
document.getElementById("question1").addEventListener("click", () => {
    checkQuestion++;
    document.getElementById("arrowQuestion1").setAttribute("style", "transform: rotate(180deg);");
    document.getElementById("subQuestion1").style.display = "block";
    if(checkQuestion === 2) {
        document.getElementById("arrowQuestion1").setAttribute("style", "transform: rotate(0deg);");
        document.getElementById("subQuestion1").style.display = "none";
        checkQuestion = 0;
    }
})
let checkQuestion2 = 0;
document.getElementById("question2").addEventListener("click", () => {
    checkQuestion2++;
    document.getElementById("subQuestion2").style.display = "block";
    document.getElementById("arrowQuestion2").setAttribute("style", "transform: rotate(180deg);");
    if(checkQuestion2 === 2) {
        document.getElementById("arrowQuestion2").setAttribute("style", "transform: rotate(0deg);");
        document.getElementById("subQuestion2").style.display = "none";
        checkQuestion2 = 0;
    }
})
let checkQuestion3 = 0;
document.getElementById("question3").addEventListener("click", () => {
    checkQuestion3++;
    document.getElementById("subQuestion3").style.display = "block";
    document.getElementById("arrowQuestion3").setAttribute("style", "transform: rotate(180deg);");
    if(checkQuestion3 === 2) {
        document.getElementById("arrowQuestion3").setAttribute("style", "transform: rotate(0deg);");
        document.getElementById("subQuestion3").style.display = "none";
        checkQuestion3 = 0;
    }
})
let checkQuestion4 = 0;
document.getElementById("question4").addEventListener("click", () => {
    checkQuestion4++;
    document.getElementById("subQuestion4").style.display = "block";
    document.getElementById("arrowQuestion4").setAttribute("style", "transform: rotate(180deg);");
    if(checkQuestion4 === 2) {
        document.getElementById("arrowQuestion4").setAttribute("style", "transform: rotate(0deg);");
        document.getElementById("subQuestion4").style.display = "none";
        checkQuestion4 = 0;
    }
})
let checkQuestion5 = 0;
document.getElementById("question5").addEventListener("click", () => {
    checkQuestion5++;
    document.getElementById("subQuestion5").style.display = "block";
    document.getElementById("arrowQuestion5").setAttribute("style", "transform: rotate(180deg);");
    if(checkQuestion5 === 2) {
        document.getElementById("arrowQuestion5").setAttribute("style", "transform: rotate(0deg);");
        document.getElementById("subQuestion5").style.display = "none";
        checkQuestion5 = 0;
    }
})



function pauseVid1() {
  introvid.pause();
}

function pauseVid2() {
  showreelvid.pause();
}


let showButton1 = 0;
document.getElementById("burgerMenuDesk").addEventListener("click", () => {
    showButton1++;
    document.getElementById("topNavBurgerDesk").setAttribute("style", "width: 90%; height: 14px;");
    document.getElementById("burgerMenuDesk").setAttribute("style", "transform: rotate(90deg)");
    if(showButton1 === 2 ) {
        document.getElementById("burgerMenuDesk").setAttribute("style", "transform: rotate(0deg)");
        document.getElementById("topNavBurgerDesk").setAttribute("style", "width: 20px; height: 9px;");
        showButton1 = 0;
    }
    setTimeout(() => {
        document.getElementById("burgerMenuDesk").setAttribute("style", "transform: rotate(0deg)");
        document.getElementById("topNavBurgerDesk").setAttribute("style", "width: 20px; height: 9px;");
        showButton1 = 0;
    }, 5000);
});

let showButton = 0;
document.getElementById("burgerMenu").addEventListener("click", () => {
    showButton++;
    document.getElementById("topNavBurger").setAttribute("style", "height: 345px");
    document.getElementById("burgerMenu").setAttribute("style", "transform: rotate(90deg)");
    if(showButton === 2 ) {
        document.getElementById("burgerMenu").setAttribute("style", "transform: rotate(0deg)");
        document.getElementById("topNavBurger").setAttribute("style", "height: 55px");
        showButton = 0;
    }
    setTimeout(() => {
        document.getElementById("burgerMenu").setAttribute("style", "transform: rotate(0deg)");
        document.getElementById("topNavBurger").setAttribute("style", "height: 55px");
        showButton = 0;
    }, 5000);
});