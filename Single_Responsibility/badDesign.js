// var Product = /** @class */ (function () {
//     function Product(name, id, price) {
//         this.name = name;
//         this.id = id;
//         this.price = price;
//     }
//     return Product;
// }());
// var Order = /** @class */ (function () {
//     function Order() {
//         this.products = [];
//     }
//     Order.prototype.addProduct = function (product) {
//         this.products.push(product);
//     };
//     Order.prototype.getProduts = function () {
//         return this.products;
//     };
//     Order.prototype.removeProduct = function (id) {
//         this.products = this.products.filter(function (product) { return product.id === id; });
//     };
//     Order.prototype.totalPrice = function () {
//         return this.products.reduce(function (total, product) { return total = total + product.price; }, 0);
//     };
//     Order.prototype.payment = function () {
//         console.log("payment done successfully");
//     };
//     Order.prototype.generateInvoice = function () {
//         this.products.forEach(function (product) {
//             console.log('product :', product.name);
//         });
//         console.log('total price ', this.totalPrice());
//     };
//     return Order;
// }());
// var product1 = new Product("chappal", "1", 1000);
// var product2 = new Product("belt", "2", 500);
// var order = new Order();
// order.addProduct(product1);
// order.addProduct(product2);
// order.generateInvoice();
