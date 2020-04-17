function getSum() {
    var currentCount = 0;
    return function (n) {
        return (currentCount = currentCount + n);
    };
}
var sum = getSum();

