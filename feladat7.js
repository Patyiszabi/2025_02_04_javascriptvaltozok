
let number;

do {
    number = prompt('Please enter a number: ');
    number = parseInt(number);
} while (isNaN(number));

if (number > 0) {
    console.log('Positive');
} else if (number < 0) {
    console.log('Negative');
} else {
    console.log('Zero');
}