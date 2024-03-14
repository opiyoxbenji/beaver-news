import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

// Sidebar component
const SideBar = () => {
	// State to store popular blogs
	const [popularBlogs, setPopularBlogs] = useState([]);

	// Fetch popular blogs data on component mount
	useEffect(() => {
		fetch('http://localhost:5000/blogs')
			.then(res => res.json())
			.then(data => setPopularBlogs(data.slice(0, 12))); // Slice the data to get first 12 blogs
	}, []);

	// Render Sidebar component
	return (
		<div>
			<div>
				<h3 className='text-2xl font-semibold px-4'>Latest Blogs</h3>
				<div>
					{popularBlogs.slice(0, 5).map(blog => (
						<div
							key={blog.id}
							className='my-5 border-b-2 border-spacing-2 px-4'>
							<h4 className='font-medium mb-2'>{blog.title}</h4>
							<Link
								to={`/blogs/${blog.id}`}
								className='text-base pb-2 hover:text-purple-600 inline-flex items-center py-1'>
								Read more <FaArrowRight className='mt-1 ml-2' />
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
// Export Sidebar component
export default SideBar;
