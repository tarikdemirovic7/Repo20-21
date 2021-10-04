var textBox = document.getElementById("inputBox");
var btn = document.getElementsByClassName("btn");
var btnDelete = document.getElementById("btnBackSpace");
var btnEnter = document.getElementById("btnEnter");
var btnCaps = document.getElementById("btnCaps");
var btnShift = document.getElementById("btnShift");
var btnSubmit = document.getElementById("btnSubmit");

var capsCheck = 0;
var shiftCheck = 0;

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function() {input(this);});
}

btnDelete.addEventListener("click", function() {textBox.value = textBox.value.substr(0, textBox.value.length-1);});
btnCaps.addEventListener("click", function() {capsBtn()});
btnShift.addEventListener("click", function() {shiftBtn()});
btnEnter.addEventListener("click", function() {textBox.value = textBox.value + this.value;})
btnSubmit.addEventListener("click", function() {alert(textBox.value);})

function input(c){
    if(shiftCheck == 0){
        if(capsCheck == 0){
            textBox.value = textBox.value + c.value;
        }else{
            textBox.value = textBox.value + c.value.toUpperCase();
        }
    }else{
        if(capsCheck == 0){
            textBox.value = textBox.value + c.value.toUpperCase();
            shiftBtn();
        }else{
            textBox.value = textBox.value + c.value.toLowerCase();
            shiftBtn();
        }
    }
}

function shiftBtn(){
    if(shiftCheck == 0){
        shiftCheck = 1;
        btnShift.style.backgroundColor = "#00FF00";
    }else{
        shiftCheck = 0;
        btnShift.style.backgroundColor = "#000000"
    }
    ;
    
}

function capsBtn(){
    if(capsCheck == 0){
        capsCheck = 1; 
        btnCaps.style.backgroundColor = "#00FF00";
    }else{
        capsCheck = 0; 
        btnCaps.style.backgroundColor = "#000000";
    }
}