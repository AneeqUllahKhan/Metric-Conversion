// Volume Conversion JS

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
    

    // Fluid ounces to other units

    if(inputTypeValue === "fl-oz" && resultTypeValue === "ml"){
        result.value = (Number(input.value) * 29.574).toFixed(2);
    }else if(inputTypeValue === "fl-oz" && resultTypeValue === "gal"){
        result.value = (Number(input.value) / 128).toFixed(2);
    }else if(inputTypeValue === "fl-oz" && resultTypeValue === "cu-meter"){
        result.value = (Number(input.value) / 33814).toFixed(2);
    }else if(inputTypeValue === "fl-oz" && resultTypeValue === "li"){
        result.value = (Number(input.value) / 33.814).toFixed(2);
    }else if(inputTypeValue === "fl-oz" && resultTypeValue === "cu-ft"){
        result.value = (Number(input.value) / 958).toFixed(2);
    }else if(inputTypeValue === "fl-oz" && resultTypeValue === "cu-yard"){
        result.value = (Number(input.value) / 25853).toFixed(2);
    }else if(inputTypeValue === "fl-oz" && resultTypeValue === "fl-oz"){
        result.value = input.value
    }

     // CubicMeters to other units

     if(inputTypeValue === "cu-meter" && resultTypeValue === "ml"){
        result.value = (Number(input.value) * 1e+6).toFixed(2);
    }else if(inputTypeValue === "cu-meter" && resultTypeValue === "gal"){
        result.value = (Number(input.value) * 264).toFixed(2);
    }else if(inputTypeValue === "cu-meter" && resultTypeValue === "fl-oz"){
        result.value = (Number(input.value) * 33814).toFixed(2);
    }else if(inputTypeValue === "cu-meter" && resultTypeValue === "li"){
        result.value = (Number(input.value) * 1000).toFixed(2);
    }else if(inputTypeValue === "cu-meter" && resultTypeValue === "cu-ft"){
        result.value = (Number(input.value) *  35.315).toFixed(2);
    }else if(inputTypeValue === "cu-meter" && resultTypeValue === "cu-yard"){
        result.value = (Number(input.value) * 1.308).toFixed(2);
    }else if(inputTypeValue === "cu-meter" && resultTypeValue === "cu-meter"){
        result.value = input.value
    }


      // Milliliters to other units

    if(inputTypeValue === "ml" && resultTypeValue === "fl-oz"){
        result.value = (Number(input.value) / 29.574).toFixed(2);
    }else if(inputTypeValue === "ml" && resultTypeValue === "gal"){
        result.value = (Number(input.value) / 3785).toFixed(2);
    }else if(inputTypeValue === "ml" && resultTypeValue === "cu-meter"){
        result.value = (Number(input.value) / 1e+6).toFixed(2);
    }else if(inputTypeValue === "ml" && resultTypeValue === "li"){
        result.value = (Number(input.value) / 1000).toFixed(2);
    }else if(inputTypeValue === "ml" && resultTypeValue === "cu-ft"){
        result.value = (Number(input.value) / 28317).toFixed(2);
    }else if(inputTypeValue === "ml" && resultTypeValue === "cu-yard"){
        result.value = (Number(input.value) / 764555).toFixed(2);
    }else if(inputTypeValue === "ml" && resultTypeValue === "ml"){
        result.value = input.value
    }


      // Gallons to other units

    if(inputTypeValue === "gal" && resultTypeValue === "ml"){
        result.value = (Number(input.value) * 3785).toFixed(2);
    }else if(inputTypeValue === "gal" && resultTypeValue === "fl-oz"){
        result.value = (Number(input.value) * 133).toFixed(2);
    }else if(inputTypeValue === "gal" && resultTypeValue === "cu-meter"){
        result.value = (Number(input.value) / 264).toFixed(2);
    }else if(inputTypeValue === "gal" && resultTypeValue === "li"){
        result.value = (Number(input.value) * 3.785).toFixed(2);
    }else if(inputTypeValue === "gal" && resultTypeValue === "cu-ft"){
        result.value = (Number(input.value) / 7.481).toFixed(2);
    }else if(inputTypeValue === "gal" && resultTypeValue === "cu-yard"){
        result.value = (Number(input.value) / 202).toFixed(2);
    }else if(inputTypeValue === "gal" && resultTypeValue === "gal"){
        result.value = input.value
    }


      // Liters to other units

    if(inputTypeValue === "li" && resultTypeValue === "ml"){
        result.value = (Number(input.value) * 1000).toFixed(2);
    }else if(inputTypeValue === "li" && resultTypeValue === "gal"){
        result.value = (Number(input.value) / 3.785).toFixed(2);
    }else if(inputTypeValue === "li" && resultTypeValue === "cu-meter"){
        result.value = (Number(input.value) / 1000).toFixed(2);
    }else if(inputTypeValue === "li" && resultTypeValue === "fl-oz"){
        result.value = (Number(input.value) * 35.195).toFixed(2);
    }else if(inputTypeValue === "li" && resultTypeValue === "cu-ft"){
        result.value = (Number(input.value) / 28.317).toFixed(2);
    }else if(inputTypeValue === "li" && resultTypeValue === "cu-yard"){
        result.value = (Number(input.value) / 765).toFixed(2);
    }else if(inputTypeValue === "li" && resultTypeValue === "li"){
        result.value = input.value
    }


     // CubicFeet to other units

     if(inputTypeValue === "cu-ft" && resultTypeValue === "ml"){
        result.value = (Number(input.value) * 28317).toFixed(2);
    }else if(inputTypeValue === "cu-ft" && resultTypeValue === "gal"){
        result.value = (Number(input.value) * 7.481).toFixed(2);
    }else if(inputTypeValue === "cu-ft" && resultTypeValue === "cu-meter"){
        result.value = (Number(input.value) / 35.315).toFixed(2);
    }else if(inputTypeValue === "cu-ft" && resultTypeValue === "li"){
        result.value = (Number(input.value) * 28.317).toFixed(2);
    }else if(inputTypeValue === "cu-ft" && resultTypeValue === "fl-oz"){
        result.value = (Number(input.value) * 997).toFixed(2);
    }else if(inputTypeValue === "cu-ft" && resultTypeValue === "cu-yard"){
        result.value = (Number(input.value) / 27).toFixed(2);
    }else if(inputTypeValue === "cu-ft" && resultTypeValue === "cu-ft"){
        result.value = input.value
    }

     // CubicYards to other units

     if(inputTypeValue === "cu-yard" && resultTypeValue === "ml"){
        result.value = (Number(input.value) * 28317).toFixed(2);
    }else if(inputTypeValue === "cu-yard" && resultTypeValue === "gal"){
        result.value =( Number(input.value) * 7.481).toFixed(2);
    }else if(inputTypeValue === "cu-yard" && resultTypeValue === "cu-meter"){
        result.value = (Number(input.value) / 35.315).toFixed(2);
    }else if(inputTypeValue === "cu-yard" && resultTypeValue === "li"){
        result.value = (Number(input.value) * 28.317).toFixed(2);
    }else if(inputTypeValue === "cu-yard" && resultTypeValue === "cu-ft"){
        result.value = (Number(input.value) / 28.317).toFixed(2);
    }else if(inputTypeValue === "cu-yard" && resultTypeValue === "fl-oz"){
        result.value = (Number(input.value) * 35.195).toFixed(2);
    }else if(inputTypeValue === "cu-yard" && resultTypeValue === "cu-yard"){
        result.value = input.value
    }

}

function foTOml(){
    document.getElementById("inputType").selectedIndex = "0";
    document.getElementById("resultType").selectedIndex = "1";
}

function galTOliter(){
    document.getElementById("inputType").selectedIndex = "2";
    document.getElementById("resultType").selectedIndex = "3";
}

function cufeetTOcumeter(){
    document.getElementById("inputType").selectedIndex = "4";
    document.getElementById("resultType").selectedIndex = "6";
}

function cuyardTOcumeter(){
    document.getElementById("inputType").selectedIndex = "5";
    document.getElementById("resultType").selectedIndex = "6";
}