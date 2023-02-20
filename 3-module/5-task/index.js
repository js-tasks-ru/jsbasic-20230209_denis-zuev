function getMinMax(str) {
 const list =  str.split(' ').filter(item => !isNaN(Number(item)));
 const max = Math.max(...list);
 const min = Math.min(...list);
 return {min: min, max: max};
}
