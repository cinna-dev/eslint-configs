// @ts-ignore
// @ts-nocheck
// @ts-check
var Mx = /** @class */ (function () {
    function Mx() {
    }
    Object.defineProperty(Mx, "myField1", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mx.prototype, "myField2", {
        get: function () {
            return "hello world";
        },
        enumerable: false,
        configurable: true
    });
    return Mx;
}());
export {};
