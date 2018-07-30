"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos_component_1 = require("./todos.component");
var todo_service_1 = require("./todo.service");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/Observable/from");
require("rxjs/add/Observable/empty");
require("rxjs/add/Observable/throw");
describe('TodosComponent', function () {
    var component;
    var service;
    var todos = [1, 2, 3];
    beforeEach(function () {
        service = new todo_service_1.TodoService(null);
        component = new todos_component_1.TodosComponent(service);
    });
    it('should set todos with incoming data from the server', function () {
        spyOn(service, 'getTodos').and.callFake(function () {
            return Observable_1.Observable.from([todos]);
        });
        component.ngOnInit();
        expect(component.todos.length).toBe(3);
    });
    it('should return save data to server', function () {
        var spy = spyOn(service, 'add').and.callFake(function (t) {
            return Observable_1.Observable.empty();
        });
        component.add();
        expect(spy).toHaveBeenCalled();
    });
    it('should add changes to server', function () {
        var todos1 = { id: 1 };
        var spy = spyOn(service, 'add').and.callFake(function (t) {
            return Observable_1.Observable.from([todos1]);
        });
        component.add();
        expect(component.todos.indexOf(todos1)).toBeGreaterThan(-1);
    });
    it('should return error if any', function () {
        var error = 'error';
        // let todos1 = { id: 1 };
        var spy = spyOn(service, 'add').and.callFake(function (t) {
            return Observable_1.Observable.throw(error);
        });
        component.add();
        expect(component.message).toBe(error);
    });
    it('should delete if user confirms', function () {
        spyOn(window, 'confirm').and.returnValue(true);
        var spy = spyOn(service, 'delete').and.callFake(function (t) {
            return Observable_1.Observable.empty();
        });
        component.delete(1);
        expect(spy).toHaveBeenCalledWith(1);
    });
    it('should NOT delete if user cancels', function () {
        spyOn(window, 'confirm').and.returnValue(false);
        var spy = spyOn(service, 'delete').and.callFake(function (t) {
            return Observable_1.Observable.empty();
        });
        component.delete(1);
        expect(spy).not.toHaveBeenCalled();
    });
});
//# sourceMappingURL=todos.component.spec.js.map