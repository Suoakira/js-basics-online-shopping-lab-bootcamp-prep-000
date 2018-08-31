var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let rngPrice = Math.floor(Math.random() * 100) + 1;
  cart.push(new Object({[item]: rngPrice}));
  return `${item} has been added to your cart.`
  return cart;
  
}
/* somthing wrong in this line of code
* consider starting from scratch
* look through some examples
* go back an learn relearn arrays an
* objects
*/

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  }
  else {
      let statement = [`In your cart, you have`];
      for (let i = 0; i < cart.length; i++) {
        for (let key in cart[i]) { 
          cart[cart.length -1] !== cart[i] ? statement.push(` ${[key]} at $${cart[i][key]},`) : statement.push(` and ${[key]} at $${cart[i][key]}.`);
        }
      }
      return statement.join("");
    }
}

function total() {
  let totals = 0;
  for (let key in cart) {
    totals += parseInt(cart[key])
    return totals
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
