var tElement = document.querySelector("#todd");
var pElement = document.querySelector("#phil");
var cElement = document.querySelector("#con");
var nElement = document.querySelector("#name");

function accept1(element){
    tElement.remove();
    cElement.push(tElement);
    
}
function accept2(element){
    pElement.remove();
    cElement.push(pElement);
    
}

function decline1(element){
    tElement.remove();
}

function decline2(element){
    pElement.remove();
}

function name(element){
    nElement.innerText = "John Doe";
}