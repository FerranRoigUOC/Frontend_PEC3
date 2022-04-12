"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const todo_model_1 = require("../models/todo.model");
/**
 * @class Service
 *
 * Manages the data of the application.
 */
class TodoService {
    constructor() {
        var todosString = localStorage.getItem("todos");
        if (todosString == null) {
            this.todos = [];
        }
        else {
            this.todos = JSON.parse(todosString);
        }
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.todos = todos.map(user => new todo_model_1.Todo(user));
    }
    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback;
    }
    _commit(todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    addTodo(todo) {
        this.todos.push(new todo_model_1.Todo(todo));
        this._commit(this.todos);
    }
    editTodo(id, todoEdit) {
        this.todos = this.todos.map(todo => todo.id === id
            ? new todo_model_1.Todo(Object.assign(Object.assign({}, todo), todoEdit))
            : todo);
        this._commit(this.todos);
    }
    deleteTodo(_id) {
        this.todos = this.todos.filter(({ id }) => id !== _id);
        this._commit(this.todos);
    }
    toggleTodo(_id) {
        this.todos = this.todos.map(todo => todo.id === _id ? new todo_model_1.Todo(Object.assign(Object.assign({}, todo), { complete: !todo.complete })) : todo);
        this._commit(this.todos);
    }
}
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map