import { TodoFormComponent } from './todo-form.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should contain name and email controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();

    // compon;
  });
  it('should require name', () => {
    let control = component.form.get('name');
    control.setValue('asfafs');
    expect(control.valid).toBeTruthy();
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
