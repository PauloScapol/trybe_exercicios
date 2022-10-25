let biggestPrime = 0;

for (number = 2; number <= 50; number += 1) {
    let prime = true;
    for (let divisor = 2; divisor < number; divisor += 1) {
        if (number % divisor === 0) {
            prime = false;
        }
    }
    if (prime) {
        biggestPrime = number;
    }
}

console.log(biggestPrime);