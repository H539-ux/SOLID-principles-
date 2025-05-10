"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCalculator = void 0;
var PriceCalculator = /** @class */ (function () {
    function PriceCalculator() {
    }
    PriceCalculator.prototype.getTotal = function (products) {
        return products.reduce(function (total, product) { return total = total + product.price; }, 0);
    };
    return PriceCalculator;
}());
exports.PriceCalculator = PriceCalculator;
