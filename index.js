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
  var t = null;
  for (var i = 0; i < array.length; i++) {
    t = array[i];
    if (t == findFn()) {
      break;
    }
  }
  if ((i+1) == array.length) {
    return null;
  } else {
    return t;
  }

}
