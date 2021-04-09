/** @format */
import React from 'react';

const procesoPesado = React.memo((iteraciones) => {
	for (let i = 0; i < iteraciones; i++) {
		console.log('Aqui vamos...');
	}
	return `${iteraciones} iteraciones realizadas`;
});
