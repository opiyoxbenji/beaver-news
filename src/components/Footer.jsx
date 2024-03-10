import React from 'react';
import { FaSquareXTwitter, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
	return (
		<div className='bg-blue-950'>
			<div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
				<div>
					<div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
						{/* categories */}
						<div>
							<p className='font-medium tracking-wide text-orange-500'>
								Categories
							</p>
							<ul className='mt-2 space-y-2'>
								<li>
									<a
										href='/'
										className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>
										News
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>
										World
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>
										Games
									</a>
								</li>
							</ul>
						</div>

						{/* community */}
						<div>
							<p className='font-medium tracking-wide text-orange-500'>
								Community
							</p>
							<ul className='mt-2 space-y-2'>
								<li>
									<a
										href='/'
										className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>
										Announcements
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>
										Discussion Boards
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>
										Our Discord
									</a>
								</li>
							</ul>
						</div>

						{/* About us */}
						<div>
							<p className='font-medium tracking-wide text-orange-500'>
								About Us
							</p>
							<ul className='mt-2 space-y-2'>
								<li>
									<a
										href='/'
										className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>
										Info
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>
										Careers
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>
										Advertise with ius
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>
										Policies
									</a>
								</li>
							</ul>
						</div>

						{/* Stay connected */}
						<div>
							<p className='font-medium tracking-wide text-orange-500'>
								Stay connected
							</p>
							<ul className='mt-2 space-y-2'>
								<li>
									<a
										href='/'
										className='text-gray-500 transition-colors duration-300 hover:text-purple-500'>
										More blogs
									</a>
								</li>
								<li>
									<span className='flex items-center text-gray-500 transition-colors duration-300 hover:text-purple-500'>
										<FaInstagram />
										<span className='ml-2'>Instagram</span>
									</span>
								</li>
								<li>
									<span className='flex items-center text-gray-500 transition-colors duration-300 hover:text-purple-500'>
										<FaSquareXTwitter />
										<span className='ml-2'>Twitter</span>
									</span>
								</li>
							</ul>
						</div>

						{/* newsletter */}
						<div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
							<p className='font-medium tracking-wide text-white'>
								Subscribe to our weekly newsletter
							</p>
							<form>
								<input
									type='email'
									name='email'
									id='email'
									className='flex-grow w-full h-12 px-4 mb-3 transition duration-100 bg-white border-gray-500 rounded shadow-sm aspect-auto md:mr-1 md:mb-0 focus:border-purple-700 focus:outline-none'
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
