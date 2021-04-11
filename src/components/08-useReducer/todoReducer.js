/** @format */

// Si no hay un state inicial que sea un arreglo vacio
export const todoReducer = (state = [], action) => {
	switch (action.type) {
		//Si la accion es de tipo 'add' se retorna el state actual mas el payLoad de la accion.
		case 'add':
			return [...state, action.payLoad];

		case 'delete':
			return state.filter((todo) => todo.id !== action.payLoad);

		case 'toggle':
			return state.map((todo) => {
				if (todo.id === action.payLoad) {
					return {
						...todo,
						done: !todo.done,
					};
				} else {
					return todo;
				}
			});

		// Forma Corta
		// case 'toggle':
		// 	return state.map((todo) =>
		// 		todo.id === action.payLoad ? { ...todo, done: !todo.done } : todo
		// 	);

		default:
			return state;
	}
};
