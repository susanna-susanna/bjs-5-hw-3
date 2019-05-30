"use strict"
//TASK 1

function getResult(a, b, c){
    
  let D = Math.pow(b, 2) - 4 * a * c;
 
  if (D < 0 ) {
    return {
      D: D
    };
  } else if (D == 0) {
    let x = -b / 2 * a;
    return {
      D: D,
      roots: [x1]
    };
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / 2 * a;
    let x2 = (-b - Math.sqrt(D)) / 2 * a;
    return {
      D: D,
      roots: [x1, x2]
    };
  }
}
getResult(25, 0, -4);

function showSolutionsMessage(a, b, c) {
  let result = getResult;
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}.`);
  console.log("Значение дискриминанта: " + result.D);

  getResult();
  if (getResult.D < 0) {
    return "Уравнение не имеет вещественных корней";
  } else if (getResult.D == 0) {
    let x = -b / 2 * a;
    return "Уравнение имеет один корень X₁ = " + x;
    
  } else if (getResult.D > 0) {
    let x1 = (-b + Math.sqrt(D)) / 2 * a;
    let x2 = (-b - Math.sqrt(D)) / 2 * a;
    return "Уравнение имеет два корня. X₁ = " + x1 + ", X₂ = " + x2;
  }
}
showSolutionsMessage(1, 2, 3);


function getAverageScore( data ) {
    /*data = {
lesson1: [1, 2, 3, 4, 5],
lesson2: [1, 2, 3, 4],
lesson3: [1, 2, 3]
};*/
  function count() {
    let total = 0;
    for (var key in data) {
    let sum = 0, result = 0;
    for (let i = 0; i < data[key].length; i++) {
    sum += data[key][i];
    result = sum / data[key].length;
    }
    total += result;
    console.log( key + ": " + result);
    }
    console.log("average: " + total / data.length);
    count();
    }
}
  getAverageScore();
  console.log(getAverageScore({lesson1: [1, 2, 3, 4, 5], lesson2: [1, 2, 3, 4], lesson3: [1, 2, 3]}));
