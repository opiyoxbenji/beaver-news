import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';

const BlogPage = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		async function fetchBlogs() {
			let url = `http://localhost:5000/blogs`;

			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
			setBlogs(data);
		}
		fetchBlogs();
	}, []);
	return (
		<div>
			{/* category section */}
			<div>Page Category</div>

			{/* blogCards section */}
      <div><BlogCards blogs={ blogs} /></div>

			{/* pagination section */}
			<div>Paggg</div>
		</div>
	);
};

export default BlogPage;
