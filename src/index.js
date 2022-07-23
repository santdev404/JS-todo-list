import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();
// const tarea = new Todo('aprender JS');

// todoList.nuevoTodo(tarea);

// crearTodoHtml(tarea);

// todoList.todos.forEach( todo => crearTodoHtml( todo ) );

todoList.todos.forEach( crearTodoHtml );

console.log('todos', todoList.todos);



