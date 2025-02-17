/**
 * Algorithm
 * 1) INPUT str
 * 2) Initialize reversedStr = ""
 * 3) for i = str.length - 1 to 0 do:
 *      a) reversedStr += str[i]
 * 4) If reversedStr === str then:
 *      print "it is pallindrome"
 * 5) Else:
 *      print "it is not a pallindrome"
 *      
 */


const str = "cddc";
let reverseStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverseStr += str[i];
}
if (reverseStr === str) {
  console.log("it is pallindrome")
} else {
  console.log("it is not a pallindrome")
}
