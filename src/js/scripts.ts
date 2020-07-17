function menuFunction() {
    const menu = document.getElementsByClassName("menu");
    const button = document.getElementsByClassName('collapsable');

    if(menu[0]?.id === "off"){
        menu[0]?.setAttribute("id", "on")
        button[0]?.setAttribute("style", "position: fixed; right: 0;")
    } else {
        menu[0]?.setAttribute("id", "off");
        button[0]?.setAttribute("style", "position: relative;")
    }
}

window.onresize = doStuff;
window.onload = doStuff;
window.onscroll = checkHeader;

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

function checkHeader(){
    const header = document.getElementById('head');
    const banner = document.getElementById('banner');

    const bounding = banner?.getBoundingClientRect();

    if(!bounding || !header?.clientHeight){
        return null;
    }
    else if(bounding?.bottom < (200 - header?.clientHeight) && header?.getAttribute('done') !== 'true'){
        header?.setAttribute('done', "true");
        banner?.setAttribute("style", `margin-top: ${header?.clientHeight}`);
        header?.setAttribute(
            "style", `
            -webkit-transition: all 1s ease;
            -moz-transition: all 1s ease;
            -o-transition: all 1s ease;
            transition: all 1s ease;
            height: 10vh;
            position: fixed;
            top:0px;
            z-index: 22; 
            background-color: #2a2f4abe;`   
        );
    }
    else if(bounding?.bottom > 100 && header?.getAttribute('done') !== 'false' ){
        header?.setAttribute('done', "false");
        banner?.setAttribute("style", "margin-top: 0");
        header?.setAttribute("style", "position: static; top:-50; z-index: 22");
    }
}

