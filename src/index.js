import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


const todoList = new TodoList();
const tarea = new Todo('aprender JS');



todoList.nuevoTodo(tarea);

crearTodoHtml(tarea);


