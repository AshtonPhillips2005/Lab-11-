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
}