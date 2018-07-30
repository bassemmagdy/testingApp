import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/from';
import 'rxjs/add/Observable/empty';
import 'rxjs/add/Observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
  let todos = [1, 2, 3];

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos with incoming data from the server', () => {
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([todos]);
    });
    component.ngOnInit();
    expect(component.todos.length).toBe(3);
  });

  it('should return save data to server', () => {
    let spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.empty();
    });
    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('should add changes to server', () => {
    let todos1 = { id: 1 };
    let spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.from([todos1]);
    });
    component.add();
    expect(component.todos).toContain(todos1);
  });

  it('should return error if any', () => {
    let error = 'error';
    // let todos1 = { id: 1 };
    let spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.throw(error);
    });
    component.add();
    expect(component.message).toBe(error);
  });

  it('should delete if user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.callFake(t => {
      return Observable.empty();
    });

    component.delete(1);
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT delete if user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.callFake(t => {
      return Observable.empty();
    });

    component.delete(1);
    expect(spy).not.toHaveBeenCalled();
  });
});
