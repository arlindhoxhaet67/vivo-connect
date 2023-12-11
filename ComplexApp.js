// Filename: ComplexApp.js
// Content: A complex JavaScript application that models an online shopping platform

// Define the class for a Product
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  } 
}

// Define the class for a ShoppingCart
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Check if the product already exists in the shopping cart
    const existingProduct = this.products.find(p => p.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.products.push(product);
    }
  }

  removeProduct(productName) {
    this.products = this.products.filter(p => p.name !== productName);
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    this.products.forEach(p => {
      totalPrice += p.price * p.quantity;
    });
    return totalPrice;
  }

  checkout() {
    const totalPrice = this.calculateTotalPrice();
    console.log(`Checkout completed! Total price: $${totalPrice}`);
    this.products = [];
  }
}

// Define the class for a User
class User {
  constructor(name) {
    this.name = name;
    this.shoppingCart = new ShoppingCart();
  }

  addToCart(product, quantity) {
    const newProduct = new Product(product.name, product.price, quantity);
    this.shoppingCart.addProduct(newProduct);
  }

  removeFromCart(productName) {
    this.shoppingCart.removeProduct(productName);
  }

  viewCartTotalPrice() {
    const totalPrice = this.shoppingCart.calculateTotalPrice();
    console.log(`Total price in cart: $${totalPrice}`);
  }

  checkout() {
    this.shoppingCart.checkout();
  }
}

// Define some sample products
const laptop = new Product('Laptop', 1200, 1);
const headphones = new Product('Headphones', 100, 2);
const mouse = new Product('Mouse', 30, 3);
const keyboard = new Product('Keyboard', 80, 1);

// Create some sample users and perform shopping-related actions
const user1 = new User('John');
const user2 = new User('Emma');

user1.addToCart(laptop, 1);
user1.addToCart(headphones, 2);

user2.addToCart(laptop, 2);
user2.addToCart(mouse, 3);
user2.addToCart(keyboard, 1);

user1.viewCartTotalPrice();
user2.viewCartTotalPrice();

user2.removeFromCart('Mouse');

user1.checkout();
user2.checkout();