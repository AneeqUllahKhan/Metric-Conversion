// Temperature Conversion JS

var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;


input.addEventListener("keyup",myresult); 
inputType.addEventListener("change",myresult);
resultType.addEventListener("change",myresult);

function myresult(){
    
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    

    // Fahrenheit to other units

    if(inputTypeValue === "F" && resultTypeValue === "C"){
        result.value = (Number(input.value - 32)/1.8).toFixed(2);
    }else if(inputTypeValue === "F" && resultTypeValue === "K"){
        result.value = (Number(input.value - 32) * 5/9 + 273.15).toFixed(2);
    }else if(inputTypeValue === "F" && resultTypeValue === "F"){
        result.value = input.value
    }

     // Celsius to other units

     if(inputTypeValue === "C" && resultTypeValue === "F"){
        result.value = (Number(input.value * 9/5) + 32).toFixed(2);
    }else if(inputTypeValue === "C" && resultTypeValue === "K"){
        result.value = (Number(input.value) + 273.15).toFixed(2);
    }else if(inputTypeValue === "C" && resultTypeValue === "C"){
        result.value = input.value
    }

     // Kelvin to other units

     if(inputTypeValue === "K" && resultTypeValue === "F"){
        result.value = (Number(input.value) - 273.15 * 9/5 + 32).toFixed(2);
    }else if(inputTypeValue === "K" && resultTypeValue === "C"){
        result.value = (Number(input.value) - 273.15).toFixed(2);
    }else if(inputTypeValue === "K" && resultTypeValue === "K"){
        result.value = input.value
    }

      
}

function fTOc(){
    document.getElementById("inputType").selectedIndex = "0";
    document.getElementById("resultType").selectedIndex = "1";
}

function cTOf(){
    document.getElementById("inputType").selectedIndex = "1";
    document.getElementById("resultType").selectedIndex = "0";
}

function kTOc(){
    document.getElementById("inputType").selectedIndex = "2";
    document.getElementById("resultType").selectedIndex = "1";
}

function kTOf(){
    document.getElementById("inputType").selectedIndex = "2";
    document.getElementById("resultType").selectedIndex = "0";
}