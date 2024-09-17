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

console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]));