function menuFunction() {
    var _a, _b, _c;
    var menu = document.getElementsByClassName("menu");
    if (((_a = menu[0]) === null || _a === void 0 ? void 0 : _a.id) === "off") {
        (_b = menu[0]) === null || _b === void 0 ? void 0 : _b.setAttribute("id", "on");
    }
    else {
        (_c = menu[0]) === null || _c === void 0 ? void 0 : _c.setAttribute("id", "off");
    }
}
window.onresize = doStuff;
window.onload = doStuff;
var Header = document.createElement("span");
Header.innerText = "Nathaniel Buckingham";
function doStuff() {
    var _a;
    if (window.innerWidth <= 614 && document.getElementById('header').innerText === "Nathaniel Buckingham Portfolio") {
        document.getElementById('header').innerHTML = "";
        document.getElementById('header').appendChild(Header);
    }
    else if (window.innerWidth >= 614 && document.getElementById('header').innerText === "Nathaniel Buckingham") {
        document.getElementById('header').innerHTML = "";
        document.getElementById('header').appendChild(Header);
        (_a = document.getElementById('header').firstChild) === null || _a === void 0 ? void 0 : _a.after(' Portfolio');
    }
}
