function formatNumberWithComma(num: number) {
    let numStr = Number.isInteger(num) ? num.toString() : num.toFixed(2);
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}


console.log(formatNumberWithComma(100));
console.log(formatNumberWithComma(100.22));
console.log(formatNumberWithComma(8100));
console.log(formatNumberWithComma(8100.45));
console.log(formatNumberWithComma(72548100.0));
console.log(formatNumberWithComma(72548100.45));