"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compute_1 = require("./compute");
compute_1.compute;
describe('compute', function () {
    it('shoudl return 0 if number is negative', function () {
        expect(compute_1.compute(-1)).toBe(0);
    });
});
//# sourceMappingURL=compute.spec.js.map