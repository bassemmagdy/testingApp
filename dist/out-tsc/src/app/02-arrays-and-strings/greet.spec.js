"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
describe('greet', function () {
    it('should return greet + name', function () {
        expect(greet_1.greet('bassem')).toContain('bassem');
        // expect(greet('bassem')).toBe('Welcome bassem');
    });
});
//# sourceMappingURL=greet.spec.js.map