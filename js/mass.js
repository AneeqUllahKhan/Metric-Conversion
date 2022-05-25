// Mass Conversion JS

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
    

    // Ounces to other units

    if(inputTypeValue === "ounce" && resultTypeValue === "gram"){
        result.value = (Number(input.value) * 28.35).toFixed(2);
    }else if(inputTypeValue === "ounce" && resultTypeValue === "pound"){
        result.value = (Number(input.value) / 16).toFixed(2);
    }else if(inputTypeValue === "ounce" && resultTypeValue === "kg"){
        result.value = (Number(input.value) / 35.274).toFixed(2);
    }else if(inputTypeValue === "ounce" && resultTypeValue === "sh-ton"){
        result.value = (Number(input.value) / 32000).toFixed(2);
    }else if(inputTypeValue === "ounce" && resultTypeValue === "mg"){
        result.value = (Number(input.value) / 35274).toFixed(2);
    }else if(inputTypeValue === "ounce" && resultTypeValue === "ounce"){
        result.value = input.value
    }

    // Grams to other units

    if(inputTypeValue === "gram" && resultTypeValue === "ounce"){
        result.value = (Number(input.value) * 0.001).toFixed(2);
    }else if(inputTypeValue === "gram" && resultTypeValue === "pound"){
        result.value = (Number(input.value) * 3.2808).toFixed(2);
    }else if(inputTypeValue === "gram" && resultTypeValue === "kg"){
        result.value = (Number(input.value) * 1.0936).toFixed(2);
    }else if(inputTypeValue === "gram" && resultTypeValue === "sh-ton"){
        result.value = (Number(input.value) * 0.00062137).toFixed(2);
    }else if(inputTypeValue === "gram" && resultTypeValue === "mg"){
        result.value = (Number(input.value) * 39.370).toFixed(2);
    }else if(inputTypeValue === "gram" && resultTypeValue === "gram"){
        result.value = input.value
    }

     // Ounces to other units

    if(inputTypeValue === "pound" && resultTypeValue === "gram"){
        result.value = (Number(input.value) * 0.001).toFixed(2);
    }else if(inputTypeValue === "pound" && resultTypeValue === "ounce"){
        result.value = (Number(input.value) * 3.2808).toFixed(2);
    }else if(inputTypeValue === "pound" && resultTypeValue === "kg"){
        result.value = (Number(input.value) * 1.0936).toFixed(2);
    }else if(inputTypeValue === "pound" && resultTypeValue === "sh-ton"){
        result.value = (Number(input.value) * 0.00062137).toFixed(2);
    }else if(inputTypeValue === "pound" && resultTypeValue === "mg"){
        result.value = (Number(input.value) * 39.370).toFixed(2);
    }else if(inputTypeValue === "pound" && resultTypeValue === "pound"){
        result.value = input.value
    }

     // Ounces to other units

    if(inputTypeValue === "kg" && resultTypeValue === "gram"){
        result.value = (Number(input.value) * 0.001).toFixed(2);
    }else if(inputTypeValue === "kg" && resultTypeValue === "pound"){
        result.value = (Number(input.value) * 3.2808).toFixed(2);
    }else if(inputTypeValue === "kg" && resultTypeValue === "ounce"){
        result.value = (Number(input.value) * 1.0936).toFixed(2);
    }else if(inputTypeValue === "kg" && resultTypeValue === "sh-ton"){
        result.value = (Number(input.value) * 0.00062137).toFixed(2);
    }else if(inputTypeValue === "kg" && resultTypeValue === "mg"){
        result.value = (Number(input.value) * 39.370).toFixed(2);
    }else if(inputTypeValue === "kg" && resultTypeValue === "kg"){
        result.value = input.value
    }

     // Ounces to other units

    if(inputTypeValue === "sh-ton" && resultTypeValue === "gram"){
        result.value = (Number(input.value) * 0.001).toFixed(2);
    }else if(inputTypeValue === "sh-ton" && resultTypeValue === "pound"){
        result.value = (Number(input.value) * 3.2808).toFixed(2);
    }else if(inputTypeValue === "sh-ton" && resultTypeValue === "kg"){
        result.value = (Number(input.value) * 1.0936).toFixed(2);
    }else if(inputTypeValue === "sh-ton" && resultTypeValue === "ounce"){
        result.value = (Number(input.value) * 0.00062137).toFixed(2);
    }else if(inputTypeValue === "sh-ton" && resultTypeValue === "mg"){
        result.value = (Number(input.value) * 39.370).toFixed(2);
    }else if(inputTypeValue === "sh-ton" && resultTypeValue === "sh-ton"){
        result.value = input.value
    }

    // Ounces to other units

    if(inputTypeValue === "mg" && resultTypeValue === "gram"){
        result.value = (Number(input.value) * 0.001).toFixed(2);
    }else if(inputTypeValue === "mg" && resultTypeValue === "pound"){
        result.value = (Number(input.value) * 3.2808).toFixed(2);
    }else if(inputTypeValue === "mg" && resultTypeValue === "kg"){
        result.value = (Number(input.value) * 1.0936).toFixed(2);
    }else if(inputTypeValue === "mg" && resultTypeValue === "sh-ton"){
        result.value = (Number(input.value) * 0.00062137).toFixed(2);
    }else if(inputTypeValue === "mg" && resultTypeValue === "ounce"){
        result.value = (Number(input.value) * 39.370).toFixed(2);
    }else if(inputTypeValue === "mg" && resultTypeValue === "mg"){
        result.value = input.value
    } 
    
}

function ounceTOgram(){
    document.getElementById("inputType").selectedIndex = "0";
    document.getElementById("resultType").selectedIndex = "1";
}

function poundTokg(){
    document.getElementById("inputType").selectedIndex = "2";
    document.getElementById("resultType").selectedIndex = "3";
}

function shtonTOmg(){
    document.getElementById("inputType").selectedIndex = "4";
    document.getElementById("resultType").selectedIndex = "5";
}