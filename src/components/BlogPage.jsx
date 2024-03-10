import React, { useEffect, useState } from 'react';

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
	return <div>BlogPage</div>;
};

export default BlogPage;
