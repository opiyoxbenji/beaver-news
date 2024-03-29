import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// React icons
import {
	FaDiscord,
	FaTwitter,
	FaInstagram,
	FaBars,
	FaXmark,
} from 'react-icons/fa6'; // Import FaTimes icon from react-icons/fa
import Modal from './Modal';

// Navbar component
const Navbar = () => {
	// State for menu and modal
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Function to toggle menu
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Navigation items
	const navItems = [
		{ path: '/', link: 'Home' },
		{ path: '/about', link: 'About' },
		// { path: '/blogs', link: 'Blogs' }, // removed the blog page because it was redundant
		{ path: '/contact', link: 'Contact' },
	];

	// modal details
	const openModal = () => {
		setIsModalOpen(true);
	};

 // Function to close modal
	const closeModal = () => {
		setIsModalOpen(false);
	};

	// Render Navbar component
	return (
		<header className='bg-blue-950 text-white fixed top-0 left-0 right-0'>
			<nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
				<a href='/' className='text-xl font-bold text-white'>
					Beaver<span className='text-purple-600'>News</span>
				</a>

				{/* Nav items */}
				<ul className='md:flex gap-12 text-lg hidden'>
					{navItems.map(({ path, link }) => (
						<li className='text-white' key={path}>
							<NavLink className='active:bg-violet-700' to={path}>
								{link}
							</NavLink>
						</li>
					))}
				</ul>

				{/* Menu icons */}
				<div className='text-white lg:flex gap-4 items-center hidden'>
					<a
						href='https://discord.com/users/1068927035994554419'
						target='_blank'
						rel='noopener noreferrer'
						className=' hover:text-purple-600'>
						<FaDiscord />
					</a>
					<a
						href='https://twitter.com/Opiyos_Benji'
						target='_blank'
						rel='noopener noreferrer'
						className=' hover:text-purple-600'>
						<FaTwitter />
					</a>
					<a
						href='https://www.instagram.com/col_in11?igsh=Y2Y5OThia3ZlYjMy'
						target='_blank'
						rel='noopener noreferrer'
						className=' hover:text-purple-600'>
						<FaInstagram />
					</a>
					<button
						onClick={openModal}
						className='bg-purple-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-purple-500 transiton-all ease-in'>
						Login
					</button>
				</div>

				{/* modal component */}
				<Modal isOpen={isModalOpen} onClose={closeModal} />

				{/* mobile menu btn */}
				<div className='md:hidden'>
					<button onClick={toggleMenu} className='cursor-pointer'>
						{isMenuOpen ? (
							<FaXmark className='w-h h-5' />
						) : (
							<FaBars className='w-5 h-5' />
						)}
					</button>
				</div>
			</nav>
			{/* menu items for mobile */}
			<div>
				<ul
					className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
						isMenuOpen
							? 'fixed top-0 left-0 w-full transition-all ease-out'
							: 'hidden'
					}`}>
					{navItems.map(({ path, link }) => (
						<li className='text-black' key={path}>
							<NavLink onClick={toggleMenu} to={path}>
								{link}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};
// Export Navbar component
export default Navbar;
