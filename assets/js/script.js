


let lastScrollTop = 0;
let scrollValue = 0;
let opValue = 0;
let rotateDrone = -15;
let checkClick = 0;
let slider = document.getElementById("myRange");

document.getElementById("appear1").setAttribute("style", "opacity: " + opValue + ";");
document.getElementById("appear2").setAttribute("style", "opacity: " + opValue + ";");
document.getElementById("appear3").setAttribute("style", "opacity: " + opValue + ";");
document.getElementById("appear4").setAttribute("style", "opacity: " + opValue + ";");
document.getElementById("droneRotate").setAttribute("style", "transform: rotate(" + rotateDrone + "deg)");
document.getElementById("gogglesRotate").setAttribute("style", "transform: rotate(" + rotateDrone + "deg)");
document.getElementById("controlerRotate").setAttribute("style", "transform: rotate(" + rotateDrone + "deg)");
window.addEventListener("scroll", function(){ 
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
        scrollDownOp();
        scrollDownRotate();
        scrollValue++;
        // console.log(scrollValue);
    } 
    else {
        scrollUpOp();
        scrollUpRotate();
        scrollValue--;
        // console.log(scrollValue);
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

document.getElementById("unrealVideo").addEventListener("click", () => {
    checkClick++;
    document.getElementById("unrealVideo").setAttribute("width", "900");
    document.getElementById("test").removeAttribute("class");
    document.getElementById("test").setAttribute("class", "specGlobal2");
    if(checkClick === 2) {
        document.getElementById("unrealVideo").setAttribute("width", "600");
        document.getElementById("test").removeAttribute("class");
        document.getElementById("test").setAttribute("class", "specGlobal");
        checkClick = 0;
    }
});

document.getElementById("myRange").addEventListener("click", () => {
    if(slider.value == 0) {
        document.getElementById("djiConstructId").src = "assets/img/homePage/djiConstruct1.png";
    }
    if(slider.value == 50) {
        document.getElementById("djiConstructId").src = "assets/img/homePage/djiConstruct2.png";
    }
    if(slider.value == 100) {
        document.getElementById("djiConstructId").src = "assets/img/homePage/djiConstruct3.png";
    }
});


function scrollDownOp() {
    if(opValue < 1) {
        opValue += 0.02;
        document.getElementById("appear1").setAttribute("style", "opacity: " + opValue + ";");
        document.getElementById("appear2").setAttribute("style", "opacity: " + opValue + ";");
        document.getElementById("appear3").setAttribute("style", "opacity: " + opValue + ";");
        document.getElementById("appear4").setAttribute("style", "opacity: " + opValue + ";");
    }
}

function scrollUpOp() {
    if(opValue >= 0) {
        opValue -= 0.02;
        document.getElementById("appear1").setAttribute("style", "opacity: " + opValue + ";");
        document.getElementById("appear2").setAttribute("style", "opacity: " + opValue + ";");
        document.getElementById("appear3").setAttribute("style", "opacity: " + opValue + ";");
        document.getElementById("appear4").setAttribute("style", "opacity: " + opValue + ";");
    }
}

function scrollDownRotate() {
    rotateDrone += 0.12;
    document.getElementById("droneRotate").setAttribute("style", "transform: rotate(" + rotateDrone + "deg)");
    document.getElementById("gogglesRotate").setAttribute("style", "transform: rotate(" + rotateDrone + "deg)");
    document.getElementById("controlerRotate").setAttribute("style", "transform: rotate(" + rotateDrone + "deg)");
}

function scrollUpRotate() {
    rotateDrone -= 0.12;
    document.getElementById("droneRotate").setAttribute("style", "transform: rotate(" + rotateDrone + "deg)");
    document.getElementById("gogglesRotate").setAttribute("style", "transform: rotate(" + rotateDrone + "deg)");
    document.getElementById("controlerRotate").setAttribute("style", "transform: rotate(" + rotateDrone + "deg)");
}


let showButton = 0;
document.getElementById("burgerMenu").addEventListener("click", () => {
    showButton++;
    document.getElementById("topNavBurger").setAttribute("style", "height: 430px");
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