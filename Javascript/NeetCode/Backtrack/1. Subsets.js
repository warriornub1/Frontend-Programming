function subsets(nums){
    const res = [];
    const subset = [];

    function dfs(i){
        if(i >= nums.length){
            res.push([...subset]);
            return;
        }

        subset.push(nums[i]);
        dfs(i + 1);
        subset.pop();
        dfs(i + 1);
    }
    dfs(0);
    return res;
}

console.log(subsets([1,2,3]));