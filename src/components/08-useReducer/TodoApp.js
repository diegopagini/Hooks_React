/** @format */

import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import './styles.css';

// Punto inicial de la App
const init = () => {
	// return [
	// 	{
	// 		id: new Date().getTime(),
	// 		desc: 'Aprender React',
	// 		done: false,
	// 	},
	// ];

	// Trae el listado de TODOS del localStorage
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
	// Reducer
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	// Stado del formulario
	const [{ description }, handleInputChange, reset] = useForm({
		description: '',
	});

	// Efecto que vuelve a renderizar solo si hay cambios en los 'todos'
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	// Control del formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim().length <= 1) {
			return;
		}

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		};

		const action = {
			type: 'add',
			payLoad: newTodo,
		};
		// Se llama la accion con el dispatch
		dispatch(action);
		reset();
	};

	return (
		<div>
			<h1>Todo App ( {todos.length} )</h1>
			<hr />
			<div className='row'>
				{/* Lista de TODOS */}
				<div className='col-7'>
					<ul className='list-group list-group-flush'>
						{todos.map((todo, i) => {
							return (
								<li key={todo.id} className='list-group-item'>
									<p className='text-center'>
										{i + 1}. {todo.desc}
									</p>
									<button className='btn btn-danger'>Borrar</button>
								</li>
							);
						})}
					</ul>
				</div>
				{/* Formulario para agregar TODOS */}
				<div className='col-5'>
					<h4>Agregar TODO</h4>
					<hr />

					<form onSubmit={handleSubmit}>
						<input
							type='text'
							name='description'
							className='form-control'
							placeholder='Aprender...'
							autoComplete='off'
							value={description}
							onChange={handleInputChange}
						/>
						<button
							type='submit'
							className='btn btn-outline-primary mt-1 w-100'
						>
							Agregar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
