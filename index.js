
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

function insertText(){
    let element = document.getElementById("targetDiv");
    element.innerHTML = "Text inserted";
}

let pressed = document.getElementById("pressable");
pressed.addEventListener("click", insertText);
doGreat();
