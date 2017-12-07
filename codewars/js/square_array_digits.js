function squareDigits(num){
    numArray = (num).toString(10).split("").map((t) => parseInt(t));
  
    resultArray = numArray.map((n => n * n));
    
    return parseInt(resultArray.join(''));
}