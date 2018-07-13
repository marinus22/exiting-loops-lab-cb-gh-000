function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
      array[i] = changeValue;
    } else {
        break
    }
  }
    return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i ++) {
    if (array[i] !== skipValue) {
      array[i] = changeValue;
    } else {
        continue;
    }
  }
  return array;
}

function findBy(array, findFn) {
  var x = findFn();
  var t = 0;
  for (var i = 0; i < array.length; i++) {
    var p = array[i];
    if (p == x) {
      break;
    }
  }
  if (array.length -1 == i) {
    return null;
  }
}
