const encode = function(strs){
    let s = "";
    for(let str of strs){
        s += str.length + "#" + str;
    }
    return s;
}

const decode = function(strs){
    let i = 0;
    let result = [];
    while(i < strs.length){
        let j = i;
        while(strs[j] != '#'){
            j++;
        }
        let length = parseInt(strs.slice(i,j));
        i = j + 1;
        result.push(strs.substring(i, i + length));
        i += length;
    }
    return result;
}

let result = encode(["neet","code","love","you"]);
console.log(result);
console.log(decode(result));