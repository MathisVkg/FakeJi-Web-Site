

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