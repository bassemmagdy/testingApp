"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
    }
    TodoService.prototype.add = function (todo) {
        return this.http.post('...', todo).map(function (r) { return r.json(); });
    };
    TodoService.prototype.getTodos = function () {
        return this.http.get('...').map(function (r) { return r.json(); });
    };
    TodoService.prototype.delete = function (id) {
        return this.http.delete('...').map(function (r) { return r.json(); });
    };
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map