/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {

    const date = new Date().getTime();

    let sum = 0;
    for (let i = 0; i<n; i++){
        sum += i;
    }
    const date2 = new Date().getTime();

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Note: Months are zero-based, so add 1
    const day = currentDate.getDate();

    console.log(`Current date: ${year}-${month}-${day}`);

    

    return date2 - date;

    // return 0.01;
}

console.log(calculateTime(1000000000));