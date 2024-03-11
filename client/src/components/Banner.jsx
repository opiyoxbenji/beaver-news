// import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const Banner = () => {
	return (
		<div className='px-4 py-32 bg-blue-950 mx-auto'>
			<div className='text-white text-center'>
				<h1 className='text-5xl lg:text-5xl leading-snug font-bold mb-5'>
					Welcome to our Blog
				</h1>
				<p className='text-gray lg:w-3/5 mx-auto mb-5 font-primary'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Sed facilis possimus vitae explicabo, quasi fugiat?
				</p>
				<div>
					<Link className='font-medium hover:text-purple-500 inline-flex items-center py-1'>
						Learn more <FaArrowRight className=' ml-2' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
