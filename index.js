function getSum() {
    var currentCount = 0;
    return function (n) {
        return (currentCount = currentCount + n);
    };
}
var sum = getSum();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
