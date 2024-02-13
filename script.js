function calculateTriangleArea(){
    // text input form input filed
   let baseInput =  document.getElementById('textInputBase');
   let base = parseFloat(baseInput.value);

   let hightInput =  document.getElementById('textInputHight');
   let hight = parseFloat(hightInput.value);
//    formula
   let result = 0.5 * base * hight;

    // area show in p tag
   let area = document.getElementById('result');
   area.innerText = result;
    // area show in area calculate
   let areaCalculate = document.getElementById('calculate');
   areaCalculate.innerText = result;
}


function calculateRectangleArea(){
    // text input form input filed  in length
    let lengthInput = document.getElementById('lengthInput');
    let lengthValue = lengthInput.value;
    let length = parseFloat(lengthValue);

    // text input form input filed  in length
    let widthInput = document.getElementById('widthInput');
    let widthValue = widthInput.value;
    let width = parseFloat(widthValue);

    let result = width  * length;

    // area show in p tag
    let area = document.getElementById('result2');
    area.innerText = result;
    // area show in area calculate
    let areaCalculate = document.getElementById('calculate2');
    areaCalculate.innerText = result;

}


// function calculateParallelogramArea(){
    // text input form input filed
//    let baseInput =  document.getElementById('BaseInput');
//    let base = parseFloat(baseInput.value);

//    let hightInput =  document.getElementById('hightInput');
//    let hight = parseFloat(hightInput.value);
//    formula
//    let result =  base * hight;

    // area show in p tag
//    let area = document.getElementById('result3');
//    area.innerText = result;
    // area show in area calculate
//    let areaCalculate = document.getElementById('calculate3');
//    areaCalculate.innerText = result;
// }


// DIFFERENT WAY USING FUNCTION;
function calculateParallelogramArea(){
    let baseInput = getInputID('BaseInput');
    let hightInput = getInputID('HightInput');
    // formula
    let result = baseInput * hightInput;

    // area show i p tag
    let area = document.getElementById('result3');
    area.innerText = result;
    // area show in calculate area;
    let areaCalculate = document.getElementById('calculate3');
    areaCalculate.innerText = result;

}



function calculateRhombusArea(){
    // text input form input filed
   let baseInput =  document.getElementById('firstd1');
   let base = parseFloat(baseInput.value);

   let hightInput =  document.getElementById('secondd2');
   let hight = parseFloat(hightInput.value);
//    formula
   let result = 0.5 * base * hight;

    // area show in p tag
   let area = document.getElementById('result4');
   area.innerText = result;
    // area show in area calculate
   let areaCalculate = document.getElementById('calculate4');
   areaCalculate.innerText = result;
}





function calculatePentagonArea(){
    // text input form input filed
   let baseInput =  document.getElementById('base');
   let base = parseFloat(baseInput.value);

   let hightInput =  document.getElementById('pentagon');
   let hight = parseFloat(hightInput.value);
//    formula
   let result = 0.5 * base * hight;

    // area show in p tag
   let area = document.getElementById('result5');
   area.innerText = result;
    // area show in area calculate
   let areaCalculate = document.getElementById('calculate5');
   areaCalculate.innerText = result;
}


// function calculateEllipseArea(){
    // text input form input filed
//    let baseInput =  document.getElementById('ellipseB');
//    let base = parseFloat(baseInput.value);

//    let hightInput =  document.getElementById('ellipseA');
//    let hight = parseFloat(hightInput.value);
//    formula
//    let result = Math.PI * base * hight;

    // area show in p tag
//    let area = document.getElementById('result6');
//    area.innerText = result;
    // area show in area calculate
//    let areaCalculate = document.getElementById('calculate6');
//    areaCalculate.innerText = result;
// }

function calculateEllipseArea(){
    let ellipseB = getInputID("ellipseB");
    let ellipseA = getInputID('ellipseA')
    // console.log(ellipseB, ellipseA);
    // formula
    let areaEllipse = Math.PI* ellipseA * ellipseB;

    let area = document.getElementById('result6');
    area.innerText = areaEllipse;

    let areaCalculate = document.getElementById('calculate6');
    areaCalculate.innerText = areaEllipse
}

// This function using all area calculate
function getInputID(idInput){
    let inputText = document.getElementById(idInput);
    let inputValue = parseFloat(inputText.value);
    return inputValue;
}
