import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const navItems = [
		{ path: '/', link: 'Home' },
		{ path: '/about', link: 'About' },
		{ path: '/blogs', link: 'Blogs' },
		{ path: '/contact', link: 'Contact' },
	];
	return (
		<header className='bg-blue-950'>
			<nav className='px-4 py-4'>
				<a href='/' className='text-xl font-bold text-white'>
					Design<span className='text-purple-600'>DK</span>
				</a>

				{/* Nav items */}
				<ul className='md:flex gap-12 text-lg hidden'>
					{navItems.map(({ path, link }) => (
						<li className='text-white' key={path}>
							<NavLink to={path}>{link}</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
