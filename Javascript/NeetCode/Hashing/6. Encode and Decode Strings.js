const encode = function(strs){
    let result = "";
    for(let str of strs){
        result += `${str.length}#${str}`;
    }
    return result;
}

const decode = function(strs){
    let i = 0;
    let res = [];
    while(i < strs.length){
        let j = i;
        while(strs[j] != '#'){
            j++;
        }
        let length = parseInt(strs.slice(i, j));
        i = j + 1;
        res.push(strs.slice(i, i+length));
        i += length;
    }
    return res;
}

let result = encode(["neet","code","love","you"]);
console.log(result);
console.log(decode(result));