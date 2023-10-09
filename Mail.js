function obfuscateEmail(userEmail, num) {
    let arr = userEmail.split("@");
    let firstPart = arr[0].slice(0, num);
    let secondPart = arr[1];
    let ans = firstPart + "..." + "@" + secondPart;
    return ans;
}

// Example usage
let userEmail = "example@example.com";
let num = 3;
let result = obfuscateEmail(userEmail, num);
console.log(result); 

