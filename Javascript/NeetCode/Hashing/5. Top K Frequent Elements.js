const topKFrequent = function(nums, k){

    let hashmap = {};
    const freq = Array.from({ length: nums.length + 1 }, () => []);
    let result = [];

    for(let i of nums){
        hashmap[i] = (hashmap[i] || 0) + 1;
    }

    for(let[n, c] of Object.entries(hashmap)){
        freq[c].push(parseInt(n));
    }
    
    for(let i = freq.length - 1; i >= 0; i--){
        if(freq[i].length != 0){
            for(let n of freq[i])
            {
                result.push(n);
                if(result.length === k)
                    return result;
            }
        }
    }
}

console.log(topKFrequent(nums = [4,5,5,6,6,6], k = 2));

//https://www.youtube.com/watch?v=PB0PelkANu0
