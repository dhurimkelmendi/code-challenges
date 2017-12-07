function arbitrate(input, n) {
    let inputArray = input.split("");
    let indices = new Array(n);
    for(let i = 0; i < n; i++) {
        if(parseInt(inputArray[i]) == 1)
            indices.push(i);
    }
    clean(indices, undefined);

    let minIndex = n + 1;
    for(let i = 0; i < indices.length; i++) {
          if(indices[i] != null)
              minIndex = Math.min(minIndex, indices[i]);
    }
    for(let i = 0; i < n; i++) {
        if(i == minIndex)
            inputArray[i] = 1;
        else
            inputArray[i] = 0;
    }
    return inputArray.join('');
}

function clean(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] == value)
            array.splice(i, 1);
    }
    return array;
}