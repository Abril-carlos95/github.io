let count = (str, char) => {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            counter += 1
        }
    }
    console.log(counter)
    return counter
}

console.log(count("hello", "l"));


var numb = [3, 12, 45, 7];
let filter = numb.filter(num => {
    return num > 10;
});
console.log("Results for array filter: " + filter);


const hypotenuse = (a, b) => {
    let pow = x => x * x;
    let sum = pow(a) + pow(b);
    return Math.sqrt(sum);
}

console.log("hypotenuse for 10 and 13: " + hypotenuse(10, 13));



