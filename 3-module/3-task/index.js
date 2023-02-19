function camelize(str) {
  return str.split('-').map((item, index) => index > 0 ? ucFirst(item) : item).join('');
}


function ucFirst(str) {

  if (str === null || str === undefined){
      return;
    } else if (str.length <= 1){
      return str.toUpperCase();
    }
    else {
     return str[0].toUpperCase() + str.slice(1);
    }

}
