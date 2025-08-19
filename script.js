function searchGoogle() {
 let query = document.getElementById("searchInput").value;
 window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
}

const grSub = document.getElementById("grSub");
const body = document.body;
const nav = document.getElementById("nav");
const home = document.getElementById("home");
const ficoco = document.getElementById("fiCoCo");
const secoco = document.getElementById("seCoCo");
const loOu = document.querySelector(".loOu");
const logo = document.querySelector(".logo");
const loTx = document.querySelector(".loTx");
const ouIn = document.querySelector(".ouIn");

function submit() {
let fiHex = ficoco.value;
let seHex = secoco.value;
let firgb = hexToRgb(fiHex);
let secgb = seHexToRgb(seHex);
let finalGr = `linear-gradient(to right, rgb(${firgb.r}, ${firgb.g}, ${firgb.b}), rgb(${secgb.sr}, ${secgb.sg}, ${secgb.sb}))`;

grSub.style.background = finalGr;
home.style.background = finalGr;
nav.style.borderImage = `${finalGr} 1`;
loOu.style.background = finalGr;
ouIn.style.background = finalGr;

let logoGr = `linear-gradient(to right, rgb(${firgb.r - 25}, ${firgb.g - 25}, ${firgb.b - 25}), rgb(${secgb.sr - 25}, ${secgb.sg - 25}, ${secgb.sb - 25}))`;

logo.style.background = logoGr;

let bodyGr = `linear-gradient(to right, rgb(${firgb.r - 45}, ${firgb.g - 45}, ${firgb.b - 45}), rgb(${secgb.sr - 45}, ${secgb.sg - 45}, ${secgb.sb - 45}))`;

body.style.background = bodyGr;
nav.style.background = bodyGr;

loTx.style.backgroundColor = `rgb(${secgb.sr}, ${secgb.sg}, ${secgb.sb})`

function hexToRgb(hex) {
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
}

function seHexToRgb(hex) {
    hex = hex.replace('#', '');
    let sr = parseInt(hex.substring(0, 2), 16);
    let sg = parseInt(hex.substring(2, 4), 16);
    let sb = parseInt(hex.substring(4, 6), 16);
    return { sr, sg, sb };
}

}
