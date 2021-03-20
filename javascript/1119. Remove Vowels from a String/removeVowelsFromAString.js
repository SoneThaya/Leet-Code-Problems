// Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from IDBTransaction, and return the new string.
//     E
// Example 1:
// Input: "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"
    
// Example 2:
// Input: "aeiou"
// Output: ""

let removeVowels = (s) => {
    let result = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            continue;
        }
        result+=s[i]
    }
    return result
}

var removeVowels2 = function(S) {
    return S.replace(/[aeiou]/gi, "");
};