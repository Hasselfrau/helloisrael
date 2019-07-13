var fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711];

// For loop to find the sum of even numbers in array fibonacci.
var sum = 0;
for (var index = 0; index < fibonacci.length; index++){
    //console.log("Index: " + index);
    //console.log("Array Element: " + fibonacci[index]);
    if (fibonacci[index] % 2 == 0) {
        //console.log("Entered if-else.");
        sum += fibonacci[index];
        //console.log("Sum: " + sum);
    };
}
console.log("Sum: " + sum);

// While loop to find the num of even numbers in array fibonacci.
var num = 0;
var index = 0;
while (index < fibonacci.length){
    //console.log("Index Start: " + index);
    //console.log("Array Element: " + fibonacci[index]);
    if (fibonacci[index] % 2 == 0) {
        //console.log("Entered if-else.");
        num++;
        //console.log("Num: " + num);
    };
    index++;""
    //console.log("Index End: " + index);
};
console.log("Num: " + num);