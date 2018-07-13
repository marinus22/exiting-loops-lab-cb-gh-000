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
  var t = null;
  for (var i = 0; i < array.length; i++) {
    t = array[i];
    if (t == x) {
      break;
    }
  }

}
