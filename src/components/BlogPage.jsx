import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';

const BlogPage = () => {
	const [blogs, setBlogs] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 12; // blogs per page
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [activeCategory, setActiveCategory] = useState(null);

	useEffect(() => {
		async function fetchBlogs() {
			let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

			// filter by category
			if (selectedCategory) {
				url += `&category=${selectedCategory}`;
			}
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
			setBlogs(data);
		}
		fetchBlogs();
	}, [currentPage, pageSize, selectedCategory]);

	// page changing button
	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber);
	};

	const handleCategoryChange = category => {
		setSelectedCategory(category);
		setCurrentPage(1);
		setActiveCategory(category);
	};
	return (
		<div>
			{/* category section */}
			<div>Page Category</div>

			{/* blogCards section */}
			<div>
				<BlogCards
					blogs={blogs}
					currentPage={currentPage}
					selectedCategory={selectedCategory}
					pageSize={pageSize}
				/>
			</div>

			{/* pagination section */}
			<div>Paggg</div>
		</div>
	);
};

export default BlogPage;
