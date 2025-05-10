"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProcessor = void 0;
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor() {
    }
    PaymentProcessor.prototype.paymentInfo = function (product) {
        console.log("processing the payment");
    };
    return PaymentProcessor;
}());
exports.PaymentProcessor = PaymentProcessor;
