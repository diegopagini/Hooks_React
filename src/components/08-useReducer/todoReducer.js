/** @format */

// Si no hay un state inicial que sea un arreglo vacio
export const todoReducer = (state = [], action) => {
	switch (action.type) {
		//Si la accion es de tipo 'add' se retorna el state actual mas el payLoad de la accion.
		case 'add':
			return [...state, action.payLoad];

		default:
			return state;
	}
};
