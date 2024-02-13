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