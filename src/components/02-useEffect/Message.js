/** @format */

import React, { useEffect, useState } from 'react';

export const Message = () => {
	const [coords, setCoords] = useState({ x: 0, y: 0 });
	const { x, y } = coords;

	useEffect(() => {
		//effect
		console.log('Componente montado');
		const mouseMove = (e) => {
			const coordenadas = { x: e.x, y: e.y };
			setCoords(coordenadas);
		};
		window.addEventListener('mousemove', mouseMove);
		return () => {
			//cleanup
			console.log('Componente desmontadao');
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	return (
		<div className='mt-3'>
			<h3>Coordenadas</h3>
			<p>
				x: {x} y: {y}
			</p>
		</div>
	);
};
