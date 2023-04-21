"use strict"
let firstName
let lastName

firstName = "John"
lastName = "Adams"
document.write(firstName + " " + lastName + "<br>")

firstName = "Anna"
lastName = "Karenina"

document.write(firstName, " ", lastName + "<br>", "<br>", "<br>")

// Steps for coffee peparation
let coffeeOrder;
let clientName;
let coffeeType1 = 'Cappuccino';
let coffeeType2 = 'Caffè Latte';
let coffeeType3 = 'Flat white';
let milkType = 'Whole milk'
let coffeePrice = 0;
let orderSize;
let coffeeSize1 = 'Small'
let coffeeSize2 = 'Medium'
let coffeeSize3 = 'Large'



//Client chose coffeeType by order
clientName = firstName + " " + lastName
coffeeOrder = coffeeType1
orderSize = coffeeSize1


if (orderSize == coffeeSize1) {
  coffeePrice = 2.50
}
else if (orderSize == coffeeSize2) {
  coffeePrice = 3.50
}
else if (orderSize == coffeeSize3) {
  coffeePrice = 5.00
}
else
  coffeePrice = 0

document.write(`New order: ${coffeeOrder} for ${clientName}`)


//Coffee preparation
let step1 = `1.Choose coffee type ${coffeeOrder};`
let step2 = `2.Put ground coffee into coffee-machine; `
let step3 = `2. Pure water into Coffemashine;`
let step4 = `3. Add ${milkType} to the coffee;`
let step5 = `4. ${firstName} your ${coffeeOrder} is ready!`


document.write("<br>", "<br>" + step1 + "<br>" + step2 + "<br>" + step3 + "<br>" + step4 + "<br>" + step5 + "<br>");


document.write("<br>", "<br>" + "Hey " + firstName + " your " + coffeeOrder + " is ready!" + "<br>" + "and your total is " + coffeePrice + " $" + "<br>");



