
var lengthOfLongestSubstring = function(s) {
     // create hash map and initialize variables
    let hashMap = new Map();
    let maxLen = 0, start = 0;

    // iterate through the string
    for (let end = 0; end < s.length; end++) {
        // hold the curr character
        const rightChar = s[end];
        
        // if the character already exists
        if (rightChar in hashMap) {
            // Since in the current window, we won't have any "rightChar" after it's previous occurence,
            // if the start index is already ahead of the index of the last occurrence, we'll keep the start index.
            start = Math.max(start, hashMap[rightChar] + 1);
        }

        // add the character to the map; 
        hashMap[rightChar] = end;

        // evaluate the max length
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
};
