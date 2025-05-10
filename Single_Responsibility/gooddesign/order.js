"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, id, price) {
        this.name = name;
        this.id = id;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
var Order = /** @class */ (function () {
    function Order() {
        this.products = [];
    }
    Order.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Order.prototype.getProduts = function () {
        return this.products;
    };
    Order.prototype.removeProduct = function (id) {
        this.products = this.products.filter(function (product) { return product.id === id; });
    };
    return Order;
}());
exports.Order = Order;
