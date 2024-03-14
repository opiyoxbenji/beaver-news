// import React from 'react';
import Banner from '../components/Banner';
import BlogPage from '../components/BlogPage';
// Home component
const Home = () => {
	return (
		<div>
			<Banner />{' '}
			<div className='max-w-7xl mx-auto'>
				<BlogPage />
			</div>
		</div>
	);
};
// Export Home component
export default Home;
