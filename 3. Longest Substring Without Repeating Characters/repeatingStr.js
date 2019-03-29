const str = "abba";

// var lengthOfLongestSubstring = function(s) {
//     if (!s.length) return 0;
//     const strMap = new Map();
//     let left = 0;
//     let maxLength = 0;
//     for(let i = 0; i < s.length; i++) {
//         if (strMap.has(s[i])) left = strMap.get(s[i]) + 1;
//         strMap.set(s[i], i);
//         console.log(i, left, strMap);
//         maxLength = i - left > maxLength ? i - left : maxLength;
//     }
//     maxLength = maxLength + 1 > strMap.size ? maxLength + 1 : strMap.size;
//     return maxLength + 1;
// };

var lengthOfLongestSubstring = function(s) {
    const acsiiArray = Array(256).fill(-1);
    let maxLength = 0;
    let start = -1;
    for (let i = 0; i < s.length; i ++) {
        const currentIndex = s[i].charCodeAt();
        if (acsiiArray[currentIndex] > start) start = acsiiArray[currentIndex];
        acsiiArray[currentIndex] = i;
        maxLength = i - start > maxLength ? i - start : maxLength;
    }
    return maxLength;
};
const main = () => {
    console.log(lengthOfLongestSubstring(str));
};

main();