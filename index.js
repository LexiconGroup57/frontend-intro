
console.log(this);
var a;


let b = 56;
const c = ["text", "another"];

c[0] = 0;

b = "erdo";
let d = b + 45;


console.log(d);

function doGreat(){
    let e = 45;
    let g;
    for(g = 0; g < e; g++){
        let h = g * e;
        var f = "Lobster";
    }
    console.log("e: ", e);
    console.log("f: ",f);
    console.log("g: ",g);
    //console.log("h: ",h);
}

let copyText = document.getElementById("targetDivA");
console.log("CopyText. ", copyText);
function addElement(elementTag, targetElement, textContent) {
    let newElement = document.createElement(elementTag);
    let textValue = document.createTextNode(textContent);
    newElement.appendChild(textValue);
    let elementToo = document.getElementById(targetElement);
    elementToo.appendChild(newElement);
}


addElement("h1", "targetDivA", "Text for h1");
addElement("p", "targetDivA", "Hello world");
addElement("h2", "targetDivB", "time for break");

function insertText(){
    let element = document.getElementById("targetDiv");
    element.innerHTML = "Text inserted";
}

let pressed = document.getElementById("pressable");
pressed.addEventListener("click", (e) => {
    let elem = e.srcElement;
    console.log(e);
    elem.innerHTML = "Pressed";
    insertText();
});
doGreat();

// () => ccc(56)