/** @format */

import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter(1);

	const { loading, data } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);

	// !!data es para preguntar si efectivamente existe la data
	const { author, quote } = !!data && data[0];
	console.log(author, quote, counter, increment);

	return (
		<div>
			<h1>BreakingBad Qoutes</h1>
			<hr></hr>
			{/* ¿Esta cargando? Mostrar Loading... Si termino, mostrar blockquote */}
			{loading ? (
				<div className='alert alert-info text-center'>Loading...</div>
			) : (
				<blockquote className='blockquote text-end'>
					<p className='mb-2'>{quote}</p>
					<footer className='blockquote-footer'>{author}</footer>
				</blockquote>
			)}

			<button className='btn btn-primary' onClick={increment}>
				Next Quote
			</button>
		</div>
	);
};
