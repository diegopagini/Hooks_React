/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
			<div className='container-fluid'>
				<div className='navbar-brand'>useContext</div>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav'>
						<NavLink
							exact
							to='/'
							className='nav-link nav-item'
							activeClassName='active'
						>
							Home
						</NavLink>
						<NavLink
							exact
							to='/about'
							className='nav-link nav-item'
							activeClassName='active'
						>
							About
						</NavLink>
						<NavLink
							exact
							to='/login'
							className='nav-link nav-item'
							activeClassName='active'
						>
							Login
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};
