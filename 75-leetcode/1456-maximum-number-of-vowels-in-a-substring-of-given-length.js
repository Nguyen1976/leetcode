/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowelCheck = (c) => {
    return ['u', 'o', 'e', 'a', 'i'].includes(c)
  }

  let maxVowel = 0
  let volweInWindow = 0;

  for(let i = 0; i < k; i++) {
    if(vowelCheck(s[i])) {
        volweInWindow++
    }
  }

  maxVowel = volweInWindow

  for (let i = k; i < s.length; i++) {
    if(vowelCheck(s[i - k])) {
        volweInWindow--;
    }
    if(vowelCheck(s[i])) {
        volweInWindow++;
    }

    maxVowel = Math.max(maxVowel, volweInWindow);
  }

  return maxVowel
}

//Sử dụng của số trượt

console.log(
  '🚀 ~ 1456-maximum-number-of-vowels-in-a-substring-of-given-length.js:9 ~ maxVowels:',
  maxVowels('abciiidef', 3)
)
