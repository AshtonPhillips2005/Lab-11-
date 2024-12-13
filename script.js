// -------------------------
// PART 1: ProductProperties Class
// -------------------------

class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Method to calculate total value of the product
    getTotalValue() {
        return this.price * this.quantity;
    }

    // Method to display product details as a string
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    // Static method to apply a discount to an array of products
    static applyDiscount(products, discount) {
        if (discount < 0 || discount > 1) {
            throw new Error("Discount must be a value between 0 and 1");
        }
        products.forEach(product => {
            product.price -= product.price * discount;
        });
    }
}

// -------------------------
// PART 2: PerishableProductProperties Class (Inheritance)
// -------------------------

class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity); // Call parent constructor
        this.expirationDate = expirationDate; // New property specific to PerishableProduct
    }

    // Override the toString() method to include the expiration date
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

// -------------------------
// PART 3: Store Class
// -------------------------

class Store {
    constructor() {
        this.inventory = []; // Array to store Product and PerishableProduct objects
    }

    // Method to add a product to the store's inventory
    addProduct(product) {
        this.inventory.push(product);
    }

    // Method to calculate the total value of all products in the inventory
    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }

    // Method to find a product by name
    findProductByName(name) {
        return this.inventory.find(product => product.name === name) || null;
    }
}

// -------------------------
// PART 4: Testing the System
// -------------------------

// Create 5 products (including 2 PerishableProduct objects)
const apple = new ProductProperties('Apple', 1.20, 50);
const orange = new ProductProperties('Orange', 0.80, 30);
const milk = new PerishableProductProperties('Milk', 2.50, 20, '2024-12-31');
const cheese = new PerishableProductProperties('Cheese', 5.00, 10, '2024-11-30');
const bread = new ProductProperties('Bread', 2.00, 15);

// Create a store and add the products
const store = new Store();
store.addProduct(apple);
store.addProduct(orange);
store.addProduct(milk);
store.addProduct(cheese);
store.addProduct(bread);

// Print all products in the inventory
console.log("🛒 Store Inventory:");
store.inventory.forEach(product => console.log(product.toString()));

// Print total inventory value before discount
let totalValueBeforeDiscount = store.getInventoryValue();
console.log(`\n💸 Total inventory value before discount: $${totalValueBeforeDiscount.toFixed(2)}`);

// Apply a 15% discount to all products
ProductProperties.applyDiscount(store.inventory, 0.15);

// Print inventory after the discount
console.log("\n🛒 Store Inventory (after 15% discount):");
store.inventory.forEach(product => console.log(product.toString()));

// Print total inventory value after discount
let totalValueAfterDiscount = store.getInventoryValue();
console.log(`\n💸 Total inventory value after discount: $${totalValueAfterDiscount.toFixed(2)}`);

// Find and print a specific product by name
const productToFind = 'Milk';
const foundProduct = store.findProductByName(productToFind);
if (foundProduct) {
    console.log(`\n🔍 Found product: ${foundProduct.toString()}`);
} else {
    console.log(`\n🔍 Product "${productToFind}" not found in inventory.`);
}
