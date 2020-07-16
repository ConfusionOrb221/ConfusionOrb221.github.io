function menuFunction() {
    const menu = document.getElementsByClassName("menu");

    if(menu[0]?.id === "off"){
        menu[0]?.setAttribute("id", "on")
    } else {
        menu[0]?.setAttribute("id", "off")
    }
}

window.onresize = doStuff;
window.onload = doStuff;

const Header : HTMLSpanElement = document.createElement("span");
Header.innerText = "Nathaniel Buckingham";

function doStuff(){
    if(window.innerWidth <= 614 && (<HTMLElement>document.getElementById('header')).innerText === "Nathaniel Buckingham Portfolio"){
       (<HTMLElement>document.getElementById('header')).innerHTML = ""; 
       (<HTMLElement>document.getElementById('header')).appendChild(Header);
    } 
    else if (window.innerWidth >= 614 && (<HTMLElement>document.getElementById('header')).innerText === "Nathaniel Buckingham") {
        (<HTMLElement>document.getElementById('header')).innerHTML = "";
        (<HTMLElement>document.getElementById('header')).appendChild(Header);
        (<HTMLElement>document.getElementById('header')).firstChild?.after(' Portfolio');
    }
}

