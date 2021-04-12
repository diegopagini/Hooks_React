/** @format */

import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
	const { setUser } = useContext(UserContext);

	return (
		<div>
			<h1>Login Screen</h1>
			<hr />
			<button
				className='btn btn-primary'
				onClick={() =>
					setUser({
						id: 123,
						name: 'Diego',
					})
				}
			>
				Login
			</button>
		</div>
	);
};
