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
  const x = findFn();
  const t = null;
  for (var i = 0; i < array.length; i++) {
    t = const array[i];
    if (t == x) {
      break;
    }
  }
  if (i+1 == array.length) {
    return null;
  }
}
