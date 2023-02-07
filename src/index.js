function addNumbers(a, b) {
    let result = a + b;
    console.log(result);
    return result;
}
  
function calcTax(price) {
    let tax = 0.1;
    return price * tax;
}
  
function processOrder(price) {
let orderTotal = price + calcTax(price);
return orderTotal;
}

let orderPrice = 100;
let finalPrice = processOrder(orderPrice);
console.log(finalPrice);
  