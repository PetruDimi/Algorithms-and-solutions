// Generate array 1 to 100 without using numbers

const arr = ["car", "bat"];
const zero = arr.indexOf("car");
const one = arr.indexOf("bat");
const oneHundred = +("" + one + zero + zero);

let newArr = [];

for (let i = 1; i <= oneHundred; i++) {
  newArr.push(i);
}

// alphabetic shift
// shift the caracters of a string to the next letter
// in the alphabet and join them

function alphabeticShift(string) {
  const alphabetUniString = "abcdefghijklmnopqrstuvwxyz";

  let charAtArr = [];
  string.split("").forEach((char) => {
    if (alphabetUniString.includes(char)) {
      charAtArr.push(alphabetUniString.indexOf(char));
    }
  });
  console.log(charAtArr);

  let alphabetShiftArr = [];
  charAtArr.forEach((val) => {
    if (val + 1 !== 26) {
      alphabetShiftArr.push(alphabetUniString.charAt(val + 1));
    } else alphabetShiftArr.push("a");
  });
  return alphabetShiftArr.join("");
}

console.log(alphabeticShift("crazy"));

// Alphabet Subsequence: see if the sequence of
//characters of a string is in ascending order

function alphabetSubsequence(string) {
  const alphabetUniString = "abcdefghijklmnopqrstuvwxyz";
  let charAtArr = [];
  string.split("").forEach((char) => {
    if (alphabetUniString.includes(char)) {
      charAtArr.push(alphabetUniString.indexOf(char));
    }
  });

  let truthArr = [];
  charAtArr.forEach((x, i) => {
    if (charAtArr[i+1]==undefined){
        return
    }
    if (x < charAtArr[i + 1]) {
        truthArr.push(true)
    } else truthArr.push(false)
  });
  if(truthArr.includes(false)){
    return false
  } else return true
}

console.log(alphabetSubsequence("cdcecrtg"));
