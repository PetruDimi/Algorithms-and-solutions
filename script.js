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
  console.log(charAtArr);

  const truthValue = charAtArr.every((x, i) => {
    return i === 0 || x >= arr[i - 1];
  });
  console.log(truthValue);
}

console.log(alphabetSubsequence("cegikm"));
