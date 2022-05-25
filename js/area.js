// Area Conversion JS

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
    
    

    // SquareInches to other units

    if(inputTypeValue === "sq-inch" && resultTypeValue === "sq-mm"){
        result.value = (Number(input.value) *  645).toFixed(2);
    }else if(inputTypeValue === "sq-inch" && resultTypeValue === "sq-feet"){
        result.value = (Number(input.value) / 144).toFixed(2);
    }else if(inputTypeValue === "sq-inch" && resultTypeValue === "sq-meter"){
        result.value = (Number(input.value) / 1550).toFixed(2);
    }else if(inputTypeValue === "sq-inch" && resultTypeValue === "sq-yard"){
        result.value = (Number(input.value) / 1296).toFixed(2);
    }else if(inputTypeValue === "sq-inch" && resultTypeValue === "acres"){
        result.value = (Number(input.value) / 6.273e+6).toFixed(2);
    }else if(inputTypeValue === "sq-inch" && resultTypeValue === "hectares"){
        result.value = (Number(input.value) / 1.55e+7).toFixed(2);
    }else if(inputTypeValue === "sq-inch" && resultTypeValue === "sq-mile"){
        result.value = (Number(input.value) / 4.014e+9).toFixed(2);
    }else if(inputTypeValue === "sq-inch" && resultTypeValue === "sq-km"){
        result.value = (Number(input.value) / 1.55e+9).toFixed(2);
    }else if(inputTypeValue === "sq-inch" && resultTypeValue === "sq-inch"){
        result.value = input.value
    }

    // SquareMillimeters to other units

    if(inputTypeValue === "sq-mm" && resultTypeValue === "sq-inch"){
        result.value = (Number(input.value) /  645).toFixed(2);
    }else if(inputTypeValue === "sq-mm" && resultTypeValue === "sq-feet"){
        result.value = (Number(input.value) / 92903).toFixed(2);
    }else if(inputTypeValue === "sq-mm" && resultTypeValue === "sq-meter"){
        result.value = (Number(input.value) / 1e+6).toFixed(2);
    }else if(inputTypeValue === "sq-mm" && resultTypeValue === "sq-yard"){
        result.value = (Number(input.value) / 836127).toFixed(2);
    }else if(inputTypeValue === "sq-mm" && resultTypeValue === "acres"){
        result.value = (Number(input.value) / 4.047e+9).toFixed(2);
    }else if(inputTypeValue === "sq-mm" && resultTypeValue === "hectares"){
        result.value = (Number(input.value) / 1e+10).toFixed(2);
    }else if(inputTypeValue === "sq-mm" && resultTypeValue === "sq-mile"){
        result.value = (Number(input.value) / 2.59e+12).toFixed(2);
    }else if(inputTypeValue === "sq-mm" && resultTypeValue === "sq-km"){
        result.value = (Number(input.value) / 1e+12).toFixed(2);
    }else if(inputTypeValue === "sq-mm" && resultTypeValue === "sq-mm"){
        result.value = input.value
    }

    // SquareFeet to other units

    if(inputTypeValue === "sq-feet" && resultTypeValue === "sq-inch"){
        result.value = (Number(input.value) * 144).toFixed(2);
    }else if(inputTypeValue === "sq-feet" && resultTypeValue === "sq-mm"){
        result.value = (Number(input.value) * 92903).toFixed(2);
    }else if(inputTypeValue === "sq-feet" && resultTypeValue === "sq-meter"){
        result.value = (Number(input.value) / 10.764).toFixed(2);
    }else if(inputTypeValue === "sq-feet" && resultTypeValue === "sq-yard"){
        result.value = (Number(input.value) / 9).toFixed(2);
    }else if(inputTypeValue === "sq-feet" && resultTypeValue === "acres"){
        result.value = (Number(input.value) / 43560).toFixed(2);
    }else if(inputTypeValue === "sq-feet" && resultTypeValue === "hectares"){
        result.value = (Number(input.value) / 107639).toFixed(2);
    }else if(inputTypeValue === "sq-feet" && resultTypeValue === "sq-mile"){
        result.value = (Number(input.value) / 2.788e+7).toFixed(2);
    }else if(inputTypeValue === "sq-feet" && resultTypeValue === "sq-km"){
        result.value = (Number(input.value) / 1.076e+7).toFixed(2);
    }else if(inputTypeValue === "sq-feet" && resultTypeValue === "sq-feet"){
        result.value = input.value
    }

     // SquareMeters to other units

     if(inputTypeValue === "sq-meter" && resultTypeValue === "sq-inch"){
        result.value = (Number(input.value) * 1550).toFixed(2);
    }else if(inputTypeValue === "sq-meter" && resultTypeValue === "sq-mm"){
        result.value = (Number(input.value) * 1e+6).toFixed(2);
    }else if(inputTypeValue === "sq-meter" && resultTypeValue === "sq-feet"){
        result.value = (Number(input.value) * 10.764).toFixed(2);
    }else if(inputTypeValue === "sq-meter" && resultTypeValue === "sq-yard"){
        result.value = (Number(input.value) * 1.196).toFixed(2);
    }else if(inputTypeValue === "sq-meter" && resultTypeValue === "acres"){
        result.value = (Number(input.value) / 4047).toFixed(2);
    }else if(inputTypeValue === "sq-meter" && resultTypeValue === "hectares"){
        result.value = (Number(input.value) / 10000).toFixed(2);
    }else if(inputTypeValue === "sq-meter" && resultTypeValue === "sq-mile"){
        result.value = (Number(input.value) / 2.59e+6).toFixed(2);
    }else if(inputTypeValue === "sq-meter" && resultTypeValue === "sq-km"){
        result.value = (Number(input.value) / 1e+6).toFixed(2);
    }else if(inputTypeValue === "sq-meter" && resultTypeValue === "sq-meter"){
        result.value = input.value
    }

     // SquareYards to other units

     if(inputTypeValue === "sq-yard" && resultTypeValue === "sq-inch"){
        result.value = (Number(input.value) * 1296).toFixed(2);
    }else if(inputTypeValue === "sq-yard" && resultTypeValue === "sq-mm"){
        result.value = (Number(input.value) * 836127).toFixed(2);
    }else if(inputTypeValue === "sq-yard" && resultTypeValue === "sq-feet"){
        result.value = (Number(input.value) * 9).toFixed(2);
    }else if(inputTypeValue === "sq-yard" && resultTypeValue === "sq-meter"){
        result.value = (Number(input.value) / 1.196).toFixed(2);
    }else if(inputTypeValue === "sq-yard" && resultTypeValue === "acres"){
        result.value = (Number(input.value) / 4840).toFixed(2);
    }else if(inputTypeValue === "sq-yard" && resultTypeValue === "hectares"){
        result.value = (Number(input.value) / 11960).toFixed(2);
    }else if(inputTypeValue === "sq-yard" && resultTypeValue === "sq-mile"){
        result.value = (Number(input.value) / 3.098e+6).toFixed(2);
    }else if(inputTypeValue === "sq-yard" && resultTypeValue === "sq-km"){
        result.value = (Number(input.value) / 1.196e+6).toFixed(2);
    }else if(inputTypeValue === "sq-yard" && resultTypeValue === "sq-yard"){
        result.value = input.value
    }

     // Acres to other units

     if(inputTypeValue === "acres" && resultTypeValue === "sq-inch"){
        result.value = (Number(input.value) * 6.273e+6).toFixed(2);
    }else if(inputTypeValue === "acres" && resultTypeValue === "sq-mm"){
        result.value = (Number(input.value) * 4.047e+9).toFixed(2);
    }else if(inputTypeValue === "acres" && resultTypeValue === "sq-feet"){
        result.value = (Number(input.value) * 43560).toFixed(2);
    }else if(inputTypeValue === "acres" && resultTypeValue === "sq-meter"){
        result.value = (Number(input.value) * 4047).toFixed(2);
    }else if(inputTypeValue === "acres" && resultTypeValue === "sq-yard"){
        result.value = (Number(input.value) * 4840).toFixed(2);
    }else if(inputTypeValue === "acres" && resultTypeValue === "hectares"){
        result.value = (Number(input.value) / 2.471).toFixed(2);
    }else if(inputTypeValue === "acres" && resultTypeValue === "sq-mile"){
        result.value = (Number(input.value) / 640).toFixed(2);
    }else if(inputTypeValue === "acres" && resultTypeValue === "sq-km"){
        result.value = (Number(input.value) / 247).toFixed(2);
    }else if(inputTypeValue === "acres" && resultTypeValue === "acres"){
        result.value = input.value
    }

   // Hectares to other units

   if(inputTypeValue === "hectares" && resultTypeValue === "sq-inch"){
    result.value = (Number(input.value) * 1.55e+7).toFixed(2);
}else if(inputTypeValue === "hectares" && resultTypeValue === "sq-mm"){
    result.value = (Number(input.value) * 1e+10).toFixed(2);
}else if(inputTypeValue === "hectares" && resultTypeValue === "sq-feet"){
    result.value = (Number(input.value) * 107639).toFixed(2);
}else if(inputTypeValue === "hectares" && resultTypeValue === "sq-meter"){
    result.value = (Number(input.value) * 10000).toFixed(2);
}else if(inputTypeValue === "hectares" && resultTypeValue === "sq-yard"){
    result.value = (Number(input.value) * 11960).toFixed(2);
}else if(inputTypeValue === "hectares" && resultTypeValue === "acres"){
    result.value = (Number(input.value) * 2.471).toFixed(2);
}else if(inputTypeValue === "hectares" && resultTypeValue === "sq-mile"){
    result.value = (Number(input.value) / 259).toFixed(2);
}else if(inputTypeValue === "hectares" && resultTypeValue === "sq-km"){
    result.value = (Number(input.value) / 100).toFixed(2);
}else if(inputTypeValue === "hectares" && resultTypeValue === "hectares"){
    result.value = input.value
}

 // SquareMiles to other units

 if(inputTypeValue === "sq-mile" && resultTypeValue === "sq-inch"){
    result.value = (Number(input.value) * 4.014e+9).toFixed(2);
}else if(inputTypeValue === "sq-mile" && resultTypeValue === "sq-mm"){
    result.value = (Number(input.value) * 2.59e+12).toFixed(2);
}else if(inputTypeValue === "sq-mile" && resultTypeValue === "sq-feet"){
    result.value = (Number(input.value) * 2.788e+7).toFixed(2);
}else if(inputTypeValue === "sq-mile" && resultTypeValue === "sq-meter"){
    result.value = (Number(input.value) * 2.59e+6).toFixed(2);
}else if(inputTypeValue === "sq-mile" && resultTypeValue === "sq-yard"){
    result.value = (Number(input.value) * 11960).toFixed(2);
}else if(inputTypeValue === "sq-mile" && resultTypeValue === "acres"){
    result.value = (Number(input.value) * 3.098e+6).toFixed(2);
}else if(inputTypeValue === "sq-mile" && resultTypeValue === "hectares"){
    result.value = (Number(input.value) * 259).toFixed(2);
}else if(inputTypeValue === "sq-mile" && resultTypeValue === "sq-km"){
    result.value = (Number(input.value) * 2.59).toFixed(2);
}else if(inputTypeValue === "sq-mile" && resultTypeValue === "sq-mile"){
    result.value = input.value
}

 // SquareKilometers to other units

 if(inputTypeValue === "sq-km" && resultTypeValue === "sq-inch"){
    result.value = (Number(input.value) * 1.55e+9).toFixed(2);
}else if(inputTypeValue === "sq-km" && resultTypeValue === "sq-mm"){
    result.value = (Number(input.value) * 1e+12).toFixed(2);
}else if(inputTypeValue === "sq-km" && resultTypeValue === "sq-feet"){
    result.value = (Number(input.value) * 1.076e+7).toFixed(2);
}else if(inputTypeValue === "sq-km" && resultTypeValue === "sq-meter"){
    result.value = (Number(input.value) * 1e+6).toFixed(2);
}else if(inputTypeValue === "sq-km" && resultTypeValue === "sq-yard"){
    result.value = (Number(input.value) * 1.196e+6).toFixed(2);
}else if(inputTypeValue === "sq-km" && resultTypeValue === "acres"){
    result.value = (Number(input.value) * 247).toFixed(2);
}else if(inputTypeValue === "sq-km" && resultTypeValue === "hectares"){
    result.value = (Number(input.value) * 100).toFixed(2);
}else if(inputTypeValue === "sq-km" && resultTypeValue === "sq-mile"){
    result.value = (Number(input.value) / 2.59).toFixed(2);
}else if(inputTypeValue === "sq-km" && resultTypeValue === "sq-km"){
    result.value = input.value
}


}

function sqinchTOsqmm(){
    document.getElementById("inputType").selectedIndex = "0";
    document.getElementById("resultType").selectedIndex = "1";
}

function sqfeetTOsqmeter(){
    document.getElementById("inputType").selectedIndex = "2";
    document.getElementById("resultType").selectedIndex = "3";
}

function sqyardTOsqmm(){
    document.getElementById("inputType").selectedIndex = "4";
    document.getElementById("resultType").selectedIndex = "3";
}

function acreTOhectare(){
    document.getElementById("inputType").selectedIndex = "5";
    document.getElementById("resultType").selectedIndex = "6";
}

function sqmileTOsqkm(){
    document.getElementById("inputType").selectedIndex = "7";
    document.getElementById("resultType").selectedIndex = "8";
}