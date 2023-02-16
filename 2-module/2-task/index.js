function isEmpty(obj) {
  let flag = true;
    for(let _ in obj) {
      flag = false;
      break;
    }
    return flag;
  }
