
const sumArr = (arr) => {
  const totalSum = arr.reduce((sum, str) => {
    // Remove all non-digit characters (a-z, A-Z) from the string using regex
    const sanitizedStr = str.replace(/[^0-9]/g, "");
    
    // Check if the sanitized string is not empty
    if (sanitizedStr.length > 0) {
      const numberSum = parseInt(sanitizedStr, 10);
      return sum + numberSum; // Add the sum of numbers in the current string to the total sum
    }
    return sum;
  }, 0);

  return totalSum;
};

console.log(sumArr(["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"])); // Output: 1512
console.log(sumArr(["asdasd"])); // Output: 0
console.log(sumArr(["asdasd12"])); // Output: 12
console.log(sumArr(["12"])); // Output: 12
