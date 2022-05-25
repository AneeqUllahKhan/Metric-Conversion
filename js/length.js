// Length Conversion js

var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;


input.addEventListener("keyup", myresult);
inputType.addEventListener("change", myresult);
resultType.addEventListener("change", myresult);

function myresult() {

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;


    // meter to other units

    if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
        result.value = (Number(input.value) * 0.001).toFixed(2);
    } else if (inputTypeValue === "meter" && resultTypeValue === "feet") {
        result.value = (Number(input.value) * 3.2808).toFixed(2);
    } else if (inputTypeValue === "meter" && resultTypeValue === "yards") {
        result.value = (Number(input.value) * 1.0936).toFixed(2);
    } else if (inputTypeValue === "meter" && resultTypeValue === "miles") {
        result.value = (Number(input.value) * 0.00062137).toFixed(2);
    } else if (inputTypeValue === "meter" && resultTypeValue === "inches") {
        result.value = (Number(input.value) * 39.370).toFixed(2);
    } else if (inputTypeValue === "meter" && resultTypeValue === "millimeter") {
        result.value = (Number(input.value) * 1000).toFixed(2);
    } else if (inputTypeValue === "meter" && resultTypeValue === "meter") {
        result.value = input.value
    }

    // kilometer to other units

    if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
        result.value = (Number(input.value) * 1000).toFixed(2);
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "feet") {
        result.value = (Number(input.value) * 3280.8).toFixed(2);
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "yards") {
        result.value = (Number(input.value) * 1093.6).toFixed(2);
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "miles") {
        result.value = (Number(input.value) * 0.62137).toFixed(2);
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "inches") {
        result.value = (Number(input.value) * 39370).toFixed(2);
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "millimeter") {
        result.value = (Number(input.value) * 1000000).toFixed(2);
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "kilometer") {
        result.value = input.value
    }

    // feet to other units 

    if (inputTypeValue === "feet" && resultTypeValue === "meter") {
        result.value = (Number(input.value) / 3.2808).toFixed(2);
    } else if (inputTypeValue === "feet" && resultTypeValue === "kilometer") {
        result.value = (Number(input.value) / 3280.8).toFixed(2);
    } else if (inputTypeValue === "feet" && resultTypeValue === "yards") {
        result.value = (Number(input.value) * 0.33333).toFixed(2);
    } else if (inputTypeValue === "feet" && resultTypeValue === "miles") {
        result.value = (Number(input.value) * 0.00018939).toFixed(2);
    } else if (inputTypeValue === "feet" && resultTypeValue === "inches") {
        result.value = (Number(input.value) * 12).toFixed(2);
    } else if (inputTypeValue === "feet" && resultTypeValue === "millimeter") {
        result.value = (Number(input.value) * 304.8).toFixed(2);
    } else if (inputTypeValue === "feet" && resultTypeValue === "feet") {
        result.value = input.value
    }

    // yards to other units

    if (inputTypeValue === "yards" && resultTypeValue === "meter") {
        result.value = (Number(input.value) / 1.0936).toFixed(2);
    } else if (inputTypeValue === "yards" && resultTypeValue === "kilometer") {
        result.value = (Number(input.value) / 1093.6).toFixed(2);
    } else if (inputTypeValue === "yards" && resultTypeValue === "feet") {
        result.value = (Number(input.value) * 3).toFixed(2);
    } else if (inputTypeValue === "yards" && resultTypeValue === "miles") {
        result.value = (Number(input.value) * 0.00056818).toFixed(2);
    } else if (inputTypeValue === "yards" && resultTypeValue === "inches") {
        result.value = (Number(input.value) * 36).toFixed(2);
    } else if (inputTypeValue === "yards" && resultTypeValue === "millimeter") {
        result.value = (Number(input.value) * 914.4).toFixed(2);
    } else if (inputTypeValue === "yards" && resultTypeValue === "yards") {
        result.value = input.value
    }

    // miles to other units

    if (inputTypeValue === "miles" && resultTypeValue === "meter") {
        result.value = (Number(input.value) / 0.00062137).toFixed(2);
    } else if (inputTypeValue === "miles" && resultTypeValue === "kilometer") {
        result.value = (Number(input.value) / 0.62137).toFixed(2);
    } else if (inputTypeValue === "miles" && resultTypeValue === "feet") {
        result.value = (Number(input.value) * 5280).toFixed(2);
    } else if (inputTypeValue === "miles" && resultTypeValue === "yards") {
        result.value = (Number(input.value) * 1760).toFixed(2);
    } else if (inputTypeValue === "miles" && resultTypeValue === "inches") {
        result.value = (Number(input.value) * 63360).toFixed(2);
    } else if (inputTypeValue === "miles" && resultTypeValue === "millimeter") {
        result.value = (Number(input.value) * 1.609e+6).toFixed(2);
    } else if (inputTypeValue === "miles" && resultTypeValue === "miles") {
        result.value = input.value
    }

    // inches to other units

    if (inputTypeValue === "inches" && resultTypeValue === "meter") {
        result.value = (Number(input.value) / 39.370).toFixed(2);
    } else if (inputTypeValue === "inches" && resultTypeValue === "kilometer") {
        result.value = (Number(input.value) / 39370).toFixed(2);
    } else if (inputTypeValue === "inches" && resultTypeValue === "feet") {
        result.value = (Number(input.value) * 0.083333).toFixed(2);
    } else if (inputTypeValue === "inches" && resultTypeValue === "miles") {
        result.value = (Number(input.value) * 0.000015783).toFixed(2);
    } else if (inputTypeValue === "inches" && resultTypeValue === "yards") {
        result.value = (Number(input.value) * 0.027778).toFixed(2);
    } else if (inputTypeValue === "inches" && resultTypeValue === "millimeter") {
        result.value = (Number(input.value) * 25.4).toFixed(2);
    } else if (inputTypeValue === "inches" && resultTypeValue === "inches") {
        result.value = input.value
    }

    // millimeter to other units

    if (inputTypeValue === "millimeter" && resultTypeValue === "meter") {
        result.value = (Number(input.value) / 1000).toFixed(2);
    } else if (inputTypeValue === "millimeter" && resultTypeValue === "kilometer") {
        result.value = (Number(input.value) / 1e+6).toFixed(2);
    } else if (inputTypeValue === "millimeter" && resultTypeValue === "feet") {
        result.value = (Number(input.value) / 305).toFixed(2);
    } else if (inputTypeValue === "millimeter" && resultTypeValue === "miles") {
        result.value = (Number(input.value) / 1.609e+6).toFixed(2);
    } else if (inputTypeValue === "millimeter" && resultTypeValue === "yards") {
        result.value = (Number(input.value) / 914).toFixed(2);
    } else if (inputTypeValue === "millimeter" && resultTypeValue === "inches") {
        result.value = (Number(input.value) / 25.4).toFixed(2);
    } else if (inputTypeValue === "millimeter" && resultTypeValue === "millimeter") {
        result.value = input.value
    }
}

function inchTOmm() {
    document.getElementById("inputType").selectedIndex = "6";
    document.getElementById("resultType").selectedIndex = "6";
}

function ftTOm() {
    document.getElementById("inputType").selectedIndex = "2";
    document.getElementById("resultType").selectedIndex = "0";
}

function yardTOm() {
    document.getElementById("inputType").selectedIndex = "3";
    document.getElementById("resultType").selectedIndex = "0";
}

function mileTOkm() {
    document.getElementById("inputType").selectedIndex = "4";
    document.getElementById("resultType").selectedIndex = "1";
}