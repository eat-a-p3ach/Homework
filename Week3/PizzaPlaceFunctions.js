// 1-2
const pizzaToppings = [
  "cheese",
  "sausage",
  "mushrooms",
  "greenpeppers",
  "bacon"
];
function greetCustomer() {
  let greeting = "Welcome to Pizza Planet! Our toppings are ";
  for (let topping of pizzaToppings) {
    greeting += `${topping}, `;
  }
  console.log(greeting);
}
greetCustomer();

// 3

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with ${toppings} coming up!`;
  console.log(order);
}
getPizzaOrder("large", "thick", "cheese", " mushrooms", " and sausage");

// 4
function preparePizza() {
  let print = "...Cooking pizza...";
  {
  }
  console.log();
}

//const items = [size: XL, crust: stuffed, pizzaToppings]
