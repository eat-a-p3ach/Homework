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
  let order = "One large thick crust pizza with ";
  for (let topping of pizzaToppings) {
    order += `${topping},  + "coming up!"`;
  }
  console.log(order);
}
getPizzaOrder();

// 4
function preparePizza(const items = [size: XL, crust: stuffed, pizzaToppings]) {
  let print = "...Cooking pizza...";

}
