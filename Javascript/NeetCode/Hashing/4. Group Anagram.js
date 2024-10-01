var groupAnagrams = function(strs){
    
    let hashmap = {}
    for(let str of strs)
    {
        //let key = str.split('').sort().join('');
        const key1 = Array(26).fill(0);
        for(let c of str){
            key1[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        let key = key1.join('');
        if(!hashmap[key])
            hashmap[key] = [];
        hashmap[key].push(str);
    }
    return Object.values(hashmap);
};

console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]));

/*
var groupAnagrams = function(strs){
    const map = new Map();
    for(const s of strs){
        
        //const key = s.split('').sort().join('');
        const count = new Array(26).fill(0);
        for(const c of s){
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        const key = count.join(',');
        if(map[key])
            map[key].push(s);
        else
            map[key] = [s];
    }
    return Object.values(map);
};
*/