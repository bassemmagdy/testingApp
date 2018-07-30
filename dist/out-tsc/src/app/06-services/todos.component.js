"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodosComponent = /** @class */ (function () {
    function TodosComponent(service) {
        this.service = service;
        this.todos = [];
    }
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getTodos().subscribe(function (t) { return (_this.todos = t); });
    };
    TodosComponent.prototype.add = function () {
        var _this = this;
        var newTodo = { title: '... ' };
        this.service
            .add(newTodo)
            .subscribe(function (t) { return _this.todos.push(t); }, function (err) { return (_this.message = err); });
    };
    TodosComponent.prototype.delete = function (id) {
        if (confirm('Are you sure?'))
            this.service.delete(id).subscribe();
    };
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map