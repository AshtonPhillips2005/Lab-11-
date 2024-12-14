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


// Create 5 products (including 2 PerishableProduct objects)
const apple = new ProductProperties('Apple', 1.20, 50);
const orange = new ProductProperties('Orange', 0.80, 30);
const milk = new PerishableProductProperties('Milk', 2.50, 20, '2024-12-31');
const cheese = new PerishableProductProperties('Cheese', 5.00, 10, '2024-11-30');
const bread = new ProductProperties('Bread', 1.75, 15);

// Create a store and add the products
const store = new Store();
store.addProduct(apple);
store.addProduct(orange);
store.addProduct(milk);
store.addProduct(cheese);
store.addProduct(bread);