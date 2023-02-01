// function adderFunction(a, b, c) {
//     return a + b + (c || 0)
// }

// function adderFunction(a, b, c = 0) {
//     return a + b + c
// }

// use spread / rest operator to add together an undefined amount of numbers

    // declare total + initialise to 0 / index
   // loop over our array of numbers and add each item to total
       // return the total

// function adderFunction(...numbers) {

//    let total = 0;

//    for(const number of numbers) {
//     total += number;
//     }

//    return total;
// }

// cleaner way using reduce

function adderFunction(...numbers) {
    return numbers.reduce(( total, number) => total + number, 0)
}


// module.export = {
//     adderFunction
// }

export {
    adderFunction
}