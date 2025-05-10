"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceProcessor = void 0;
var InvoiceProcessor = /** @class */ (function () {
    function InvoiceProcessor() {
    }
    InvoiceProcessor.prototype.generateInvoice = function (products, amount) {
        products.forEach(function (product) {
            console.log('product :', product.name);
        });
        console.log('total price ', amount);
    };
    return InvoiceProcessor;
}());
exports.InvoiceProcessor = InvoiceProcessor;
