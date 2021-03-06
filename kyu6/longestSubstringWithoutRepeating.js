// MAP
const lengthOfLongestSubstringMap = (s) =>{
    let max = 0
    let begin = 0
    let map = {}

    for(let end = 0;end < s.length;end++){ // O(n)
        //to check if i seen a character before.
        //and the repeated character needs to be located at the index greater or equal to the begin index
        if(map[s[end]] !== undefined && map[s[end]] >= begin){
            //if there is a duplicate character I'm going to update my starting point
            begin = map[s[end]] + 1
        }
        //this will record at what index we seen each character
        map[s[end]] = end
        
        //example: begin = 0, end = 1 => subtring = "ab"
            // 1 - 0 = 1 => "a" then we add 1 => "ab"
        max = Math.max(max, end - begin + 1)
    }


    return max
}

// SET
const lengthOfLongestSubstringSet = (s) => {
    let mySet = new Set()
    let left = 0
    let right = 0
    let maxSubStringLength = 0

    while(right < s.length){
        if(!mySet.has(s.charAt(right))){
            mySet.add(s.charAt(right))
            maxSubStringLength = Math.max(maxSubStringLength, mySet.size)
            right++
        }else{
            mySet.delete(s.charAt(left))
            left++
        }
    }

    return maxSubStringLength
    
}
