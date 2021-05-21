//   TASK 1
const convertFahrToCelsius = (fahr) => {
    let celcius;
    let n = Number(fahr);
    if (isNaN(n)) {
        celcius=`${fahr} is not a valid number but a/an ${typeof(fahr)}.`
        return celcius;
    } else {
        celcius = ((n - 32) * (5/9)).toFixed(4);
        return celcius;
    }
}
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius({temp:0}));


//   TASK 2
const checkYuGiOh = (n) => {
    let num = Number(n);
    let i;
    let arr = [];
    if (isNaN(num) === false){
        for(i = 1; i <= num; i++) {
            if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
                arr.push("yu-gi-oh");
            } else if(i % 2 === 0 && i % 3 === 0) {
                arr.push("yu-gi");
            } else if(i % 2 === 0 && i % 5 === 0) {
                arr.push("yu-oh");
            } else if(i % 3 === 0 && i % 5 === 0) {
                arr.push("gi-oh");
            } else if(i % 2 === 0) {
                arr.push("yu");
            } else if(i % 3 === 0) {
                arr.push("gi");
            } else if(i % 5 === 0) {
                arr.push("oh");
            } else {
                arr.push(i);
            }
        }
        console.log(arr);
    } else {
        console.log (`invalid parameter: ${n}`);
    }
    
}

checkYuGiOh(2);
checkYuGiOh(5);
checkYuGiOh(6);
checkYuGiOh(10);
checkYuGiOh(30);
checkYuGiOh("fizzbuzz is meh");

