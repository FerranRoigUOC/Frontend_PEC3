import { Todo } from '../models/todo.model';

/**
 * @class Service
 *
 * Manages the data of the application.
 */
 export class TodoService {
   todos: Todo[];
   onTodoListChanged: Function;// = (todos: Todo[]) => void{};

  constructor() {
    var todosString : null | string = localStorage.getItem("todos");
    if(todosString == null){
      this.todos = [];
    }else{
      this.todos = JSON.parse(todosString);
    }
    const todos: Todo[] = JSON.parse(localStorage.getItem('todos')) || [];
    this.todos = todos.map(user => new Todo(user));
  }

  public bindTodoListChanged(callback: Function) {
    this.onTodoListChanged = callback;
  }

  public _commit(todos: Todo[]) {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  public addTodo(todo: Todo) {
    this.todos.push(new Todo(todo));

    this._commit(this.todos);
  }

  public editTodo(id: number, todoEdit: Todo) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
            ...todo,
            ...todoEdit
        })
        : todo
    );

    this._commit(this.todos);
  }

  public deleteTodo(_id: number) {
    this.todos = this.todos.filter(({ id }) => id !== _id);

    this._commit(this.todos);
  }

  public toggleTodo(_id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
}
