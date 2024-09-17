const isAnagram = function (s, t) {
  if(s.length != t.length )
    return false;

  let hashmap = new Map();
  for(let char of s){
    let total = hashmap.has(char) ? hashmap.get(char) + 1 : 1;
    hashmap.set(char, total);
  }

  for(let char of t){
    if(!hashmap.has(char))
      return false;
    else{
      let total = hashmap.get(char) - 1;
      if(total < 0)
        return false
      else
        hashmap.set(char, total);
    }
  }
  return true;

};

console.log(isAnagram("racecar", "carrace"));
console.log(isAnagram("jar", "jam"));
