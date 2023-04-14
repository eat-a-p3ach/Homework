// 1-2
let pizzaToppings = ["cheese", "sausage", "mushrooms", "greenpeppers", "bacon"];
function greetCustomer() {
  let greeting = "Welcome to Pizza Planet! Our toppings are ";
  for (let topping of pizzaToppings) {
    greeting += `${topping}, `;
  }
  console.log(greeting);
}

// 3

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with ${toppings} coming up!`;
  console.log(order);
  return [size, crust, toppings];
}

// 4
function preparePizza([size, crust, toppings]) {
  console.log("...Cooking pizza...");
  let obj = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return obj;
}
console.log();

// 5
function servePizza(obj) {
  console.log(
    `Order up! Here ${obj.size}, ${obj.crust} pizza with ${obj.toppings}. Enjoy!`
  );
}
// 6
greetCustomer();
servePizza(
  preparePizza(
    getPizzaOrder("XL", "thick", "cheese", " mushrooms", " and sausage")
  )
);
//
