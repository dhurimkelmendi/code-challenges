function certainSum(a, b){
    let maxInt = Number.MAX_SAFE_INTEGER;
    if(Math.abs(a) <= maxInt && Math.abs(b) <= maxInt && Math.abs(a + b) <= maxInt)
        return a + b;
    return false;
}