var fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711];
console.log(fibonacci.length);
var sum = 0;
for (var index = 0; index < fibonacci.length; index++){
    if (fibonacci[index] % 2 == 0) {
        sum += fibonacci[index]
    };
}
console.log(sum);