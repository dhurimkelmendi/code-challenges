function getMiddle(s)
{
    let stringLength = s.length;
    let characters = s.split('');
    let result = '';
    let middle = stringLength / 2.0;
    if(stringLength % 2 == 0) {
        result = `${ s[middle - 1] }${ s[middle] }`;        
    }
    else {
        middle = parseInt(middle);
        result = `${ s[middle] }`;        
    }
    return result;
}