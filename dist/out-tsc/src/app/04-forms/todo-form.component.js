"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var TodoFormComponent = /** @class */ (function () {
    function TodoFormComponent(fb) {
        this.form = fb.group({
            name: ['', forms_1.Validators.required],
            email: [''],
        });
    }
    return TodoFormComponent;
}());
exports.TodoFormComponent = TodoFormComponent;
//# sourceMappingURL=todo-form.component.js.map