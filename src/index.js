function isArrayFilled(array){
  if(array.length != 0){
    return 1;
  } else{
      return 0;
  }
}

function isArrayNorm(array){
  if(Array.isArray(array) == 1){
    return isArrayFilled(array);
  } else{
      return 0;
  }
}


exports.min = function min (array) {
  if(isArrayNorm(array) == 1){
    array.sort((a,b) => a-b)
    return array[0];
  } else{
      return 0;
  }
}

exports.max = function max (array) {

  if(isArrayNorm(array) == 1){
    array.sort((a,b) => b-a);
    return array[0];  
  } else{
      return 0;
  }
}

exports.avg = function avg (array) {
  if(isArrayNorm(array) == 1){
    let summ = 0
      , average = 0;

    
    for(let i=0 ; i < array.length ; i++){
      summ += array[i];
    }

    

    return summ/array.length;
  } else{
      return 0;
  }
}


