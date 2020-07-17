function menuFunction() {
    var _a, _b, _c, _d, _e;
    var menu = document.getElementsByClassName("menu");
    var button = document.getElementsByClassName('collapsable');
    if (((_a = menu[0]) === null || _a === void 0 ? void 0 : _a.id) === "off") {
        (_b = menu[0]) === null || _b === void 0 ? void 0 : _b.setAttribute("id", "on");
        (_c = button[0]) === null || _c === void 0 ? void 0 : _c.setAttribute("style", "position: fixed; right: 0;");
    }
    else {
        (_d = menu[0]) === null || _d === void 0 ? void 0 : _d.setAttribute("id", "off");
        (_e = button[0]) === null || _e === void 0 ? void 0 : _e.setAttribute("style", "position: relative;");
    }
}
window.onresize = doStuff;
window.onload = doStuff;
window.onscroll = checkHeader;
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
function checkHeader() {
    var header = document.getElementById('head');
    var banner = document.getElementById('banner');
    var bounding = banner === null || banner === void 0 ? void 0 : banner.getBoundingClientRect();
    if (!bounding || !(header === null || header === void 0 ? void 0 : header.clientHeight)) {
        return null;
    }
    else if ((bounding === null || bounding === void 0 ? void 0 : bounding.bottom) < (200 - (header === null || header === void 0 ? void 0 : header.clientHeight)) && (header === null || header === void 0 ? void 0 : header.getAttribute('done')) !== 'true') {
        header === null || header === void 0 ? void 0 : header.setAttribute('done', "true");
        banner === null || banner === void 0 ? void 0 : banner.setAttribute("style", "margin-top: " + (header === null || header === void 0 ? void 0 : header.clientHeight));
        header === null || header === void 0 ? void 0 : header.setAttribute("style", "\n            -webkit-transition: all 1s ease;\n            -moz-transition: all 1s ease;\n            -o-transition: all 1s ease;\n            transition: all 1s ease;\n            height: 10vh;\n            position: fixed;\n            top:0px;\n            z-index: 22; \n            background-color: #2a2f4abe;");
    }
    else if ((bounding === null || bounding === void 0 ? void 0 : bounding.bottom) > 100 && (header === null || header === void 0 ? void 0 : header.getAttribute('done')) !== 'false') {
        header === null || header === void 0 ? void 0 : header.setAttribute('done', "false");
        banner === null || banner === void 0 ? void 0 : banner.setAttribute("style", "margin-top: 0");
        header === null || header === void 0 ? void 0 : header.setAttribute("style", "position: static; top:-50; z-index: 22");
    }
}
