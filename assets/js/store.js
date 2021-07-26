

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

function pauseVid1() {
  introvid.pause();
}

function pauseVid2() {
  showreelvid.pause();
}
