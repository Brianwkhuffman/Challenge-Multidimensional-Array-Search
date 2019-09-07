function locate(array, target) {
  // do work here
  let newArr = JSON.stringify(array);
  let newTarget = JSON.stringify(target);
  let result = newArr.indexOf(newTarget);
  if (result != -1) {
    return true;
  } else {
    return false;
  }

};

module.exports = locate;
