function sumTwoSmallestNumbers(numbers) {  
    let lowest = Number.MAX_SAFE_INTEGER;
    let lowestIndex = 0;
    for(let i = 0; i < numbers.length; i++) {
          if(numbers[i] != null){
              lowest = Math.min(lowest, numbers[i]);
          }
    }
    
    for(let i = 0; i < numbers.length; i++)
        if(numbers[i] == lowest)
            lowestIndex = i;
    
    let secondLowest =  Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < numbers.length; i++) {
          if(numbers[i] != null && numbers[i] >= lowest){
              if(i != lowestIndex){
                  secondLowest = Math.min(secondLowest, numbers[i]);
              }
          }
    }
    return lowest + secondLowest;
};