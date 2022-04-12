(()=>{"use strict";var t={568:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.TodoController=void 0,e.TodoController=class{constructor(t,e){this.onTodoListChanged=t=>{this.view.displayTodos(t)},this.handleAddTodo=t=>{this.service.addTodo(t)},this.handleEditTodo=(t,e)=>{this.service.editTodo(t,e)},this.handleDeleteTodo=t=>{this.service.deleteTodo(t)},this.handleToggleTodo=t=>{this.service.toggleTodo(t)},this.service=t,this.view=e,this.service.bindTodoListChanged(this.onTodoListChanged),this.view.bindAddTodo(this.handleAddTodo),this.view.bindEditTodo(this.handleEditTodo),this.view.bindDeleteTodo(this.handleDeleteTodo),this.view.bindToggleTodo(this.handleToggleTodo),this.onTodoListChanged(this.service.todos)}}},89:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Todo=void 0,e.Todo=class{constructor({text:t,complete:e}={text:null,complete:!1}){this.id=this.uuidv4(),this.text=t,this.complete=e}uuidv4(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(t=>(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)))}}},416:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.TodoService=void 0;const i=o(89);e.TodoService=class{constructor(){var t=localStorage.getItem("todos");this.todos=null==t?[]:JSON.parse(t);const e=JSON.parse(localStorage.getItem("todos"))||[];this.todos=e.map((t=>new i.Todo(t)))}bindTodoListChanged(t){this.onTodoListChanged=t}_commit(t){this.onTodoListChanged(t),localStorage.setItem("todos",JSON.stringify(t))}addTodo(t){this.todos.push(new i.Todo(t)),this._commit(this.todos)}editTodo(t,e){this.todos=this.todos.map((o=>o.id===t?new i.Todo(Object.assign(Object.assign({},o),e)):o)),this._commit(this.todos)}deleteTodo(t){this.todos=this.todos.filter((({id:e})=>e!==t)),this._commit(this.todos)}toggleTodo(t){this.todos=this.todos.map((e=>e.id===t?new i.Todo(Object.assign(Object.assign({},e),{complete:!e.complete})):e)),this._commit(this.todos)}}},636:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.TodoView=void 0,e.TodoView=class{constructor(){this.app=this.getElement("#root"),this.form=document.createElement("form"),this.input=document.createElement("input"),this.input.type="text",this.input.placeholder="Add todo",this.input.name="todo",this.submitButton=document.createElement("button"),this.submitButton.textContent="Submit",this.form.append(this.input,this.submitButton),this.title=document.createElement("h1"),this.title.textContent="Todos",this.todoList=this.createElement("ul","todo-list"),this.app.append(this.title,this.form,this.todoList),this._temporaryTodoText="",this._initLocalListeners()}_todoText(){return this.input.value}_resetInput(){this.input.value=""}createElement(t,e){const o=document.createElement(t);return e&&o.classList.add(e),o}getElement(t){return document.querySelector(t)}displayTodos(t){for(;this.todoList.firstChild;)this.todoList.removeChild(this.todoList.firstChild);if(0===t.length){const t=document.createElement("p");t.textContent="Nothing to do! Add a task?",this.todoList.append(t)}else t.forEach((t=>{const e=document.createElement("li");e.id=t.id.toString();const o=document.createElement("input");o.type="checkbox",o.checked=t.complete;const i=document.createElement("span");if(i.contentEditable="true",i.classList.add("editable"),t.complete){const e=document.createElement("s");e.textContent=t.text,i.append(e)}else i.textContent=t.text;const s=document.createElement("button");s.classList.add("delete"),s.textContent="Delete",e.append(o,i,s),this.todoList.append(e)}));console.log(t)}_initLocalListeners(){this.todoList.addEventListener("input",(t=>{const e=t.target;"editable"===e.className&&(this._temporaryTodoText=e.innerText)}))}bindAddTodo(t){this.form.addEventListener("submit",(e=>{e.preventDefault(),this._todoText()&&(t({text:this._todoText()}),this._resetInput())}))}bindDeleteTodo(t){this.todoList.addEventListener("click",(e=>{const o=e.target;if(null!=o.parentElement&&"delete"===o.className){const e=o.parentElement.id;t(e)}}))}bindEditTodo(t){this.todoList.addEventListener("focusout",(e=>{if(this._temporaryTodoText){const o=e.target;if(null!=o.parentElement){const e=o.parentElement.id;t(e,{text:this._temporaryTodoText}),this._temporaryTodoText=""}}}))}bindToggleTodo(t){this.todoList.addEventListener("change",(e=>{const o=e.target;if(null!=o.parentElement&&"checkbox"===o.type){const e=o.parentElement.id;t(e)}}))}}}},e={};function o(i){var s=e[i];if(void 0!==s)return s.exports;var d=e[i]={exports:{}};return t[i](d,d.exports,o),d.exports}(()=>{const t=o(416),e=o(636);new(o(568).TodoController)(new t.TodoService,new e.TodoView)})()})();