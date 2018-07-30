"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_form_component_1 = require("./todo-form.component");
var forms_1 = require("@angular/forms");
describe('TodoFormComponent', function () {
    var component;
    beforeEach(function () {
        component = new todo_form_component_1.TodoFormComponent(new forms_1.FormBuilder());
    });
    it('', function () {
    });
    it('', function () {
    });
    // it('should contain name and email', () => {
    //   expect(component.form.contains('name')).toBeTruthy();
    //   expect(component.form.contains('email')).toBeTruthy();
    // });
    // it('should require name', () => {
    //   // Arrange
    //   let control = component.form.get('name');
    //   // ACT
    //   control.setValue('faaf');
    //   // Assert
    //   expect(control.valid).toBeTruthy();
    // });
});
//# sourceMappingURL=todo-form.component.spec.js.map