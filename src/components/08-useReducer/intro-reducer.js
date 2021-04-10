/** @format */

// Estado Inicial
const initialState = [
	{
		id: 1,
		todo: 'Comprar Leche',
		done: false,
	},
];

// Reducer
const todoReducer = (state = initialState, action) => {
	if (action?.type === 'agregar') {
		return [...state, action.payLoad];
	}
	return state;
};

let todos = todoReducer();

// Nuevo Estado
const newTodo = {
	id: 2,
	todo: 'Comprar Carne',
	done: false,
};

// Accion
const agregarTodoAction = {
	type: 'agregar',
	payLoad: newTodo,
};

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);
