/** @format */

import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

// Punto inicial de la App
const init = () => {
	// Trae el listado de TODOS del localStorage
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
	// Reducer
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	// Efecto que vuelve a renderizar solo si hay cambios en los 'todos'
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	// Borrar TODO
	const handleDelete = (todoId) => {
		const action = {
			type: 'delete',
			payLoad: todoId,
		};

		dispatch(action);
	};

	// Marcar como completado
	const handleToggle = (todoId) => {
		dispatch({
			type: 'toggle',
			payLoad: todoId,
		});
	};

	const handleAddTodo = (newTodo) => {
		dispatch({
			type: 'add',
			payLoad: newTodo,
		});
	};

	return (
		<div>
			<h1>Todo App ( {todos.length} )</h1>
			<hr />
			<div className='row'>
				{/* Lista de TODOS */}
				<div className='col-7'>
					<TodoList
						todos={todos}
						handleDelete={handleDelete}
						handleToggle={handleToggle}
					/>
				</div>
				{/* Formulario para agregar TODOS */}
				<div className='col-5'>
					<TodoAdd handleAddTodo={handleAddTodo} />
				</div>
			</div>
		</div>
	);
};
