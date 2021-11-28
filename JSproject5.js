
var arr = [];

function show() {

  var str = document.getElementById('num1').value;

  arr.push(str);

  var arrStr = arr.toString();

  document.getElementById("result").innerHTML = arrStr;
}

//lol

var array = [];

function addStart() {

  var str = getInputValue();

  var stringEmpty = isStringEmpty(str);
  if (stringEmpty) {
    return;
  }

  array.push(str);
  showArray();

}

function addEnd() {

  var str = getInputValue();

  var stringEmpty = isStringEmpty(str);
  if (stringEmpty) {
    return;
  }

  array.unshift(str);
  showArray();

}

function deleteStart() {

  var str = getInputValue();

  var emptyArray = isArrayEmpty(array);
  if (emptyArray) {
    return;
  }

  array.pop(str);
  showArray();

}

function deleteEnd() {
  var str = getInputValue();

  var emptyArray = isArrayEmpty(array);
  if (emptyArray) {
    return;
  }

  array.shift(str);

  showArray();

}

function getInputValue() {
  return document.getElementById('num2').value;
}

function showArray() {
  var arrayStr = array.toString();

  document.getElementById("result1").innerHTML = arrayStr;
}


function isStringEmpty(str) {
  if (str == '') {
    alert('Введите текст');
    return true;
  } else {
    return false;
  }
}

function isArrayEmpty() {
  if (array.length == 0) {
    alert('Массив пустой');
    return true;
  } else {
    return false;
  }
}

function massiveLength() {
  var x = array.length;
  document.getElementById("result2").innerHTML = x;
}




function massiveSlice() {
  var x = +document.getElementById('num3').value;
  var f = +document.getElementById('num4').value;
  var subArray = array.slice(x,f);
  var str = subArray.toString();

  document.getElementById("result3").innerHTML = str;
}

function massiveSplice() {
  var x = +document.getElementById('num3').value;
  var f = +document.getElementById('num4').value;
  var removed = array.splice(x, f);
  var str = removed.toString();
  showArray();
  var result = 'Результат - ' + str;
  document.getElementById("result3").innerHTML = result;
}

function showMarkRange() {
  var mark = document.getElementById('num5').value;
  mark = mark.toUpperCase();

  switch (mark) {
    case "A":
      alert('90-100');
      break;
    case "B":
      alert('82-89');
      break;
    case "C":
      alert('74-81');
      break;
    case "D":
      alert('64-73');
      break;
    case "E":
      alert('60-63');
      break;
    case "FX":
      alert('35-59');
      break;
    case "F":
      alert('0-34');
      break;
    default:
      alert('Fuck you, asshole');
      break;
  }
}
