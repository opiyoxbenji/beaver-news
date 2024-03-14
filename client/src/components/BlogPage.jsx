import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

// BlogPage component
const BlogPage = () => {
	// State variables
	const [blogs, setBlogs] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 12; // blogs per page
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [activeCategory, setActiveCategory] = useState(null);

// useEffect to fetch blogs based on current page and selected category
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

			// Update blogs state with fetched data
			setBlogs(data);
		}
		fetchBlogs();
	}, [currentPage, pageSize, selectedCategory]);

	// page changing button
	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber);
	};

	// Function to handle category changes
	const handleCategoryChange = category => {
		setSelectedCategory(category);
		setCurrentPage(1); // Reset page to 1 when category changes
		setActiveCategory(category);
	};

	return (
		<div>
			{/* category section */}
			<div>
				<CategorySelection
					onSelectCategory={handleCategoryChange}
					selectedCategory={selectedCategory}
					activeCategory={activeCategory}
				/>
			</div>

			{/* blogCards section */}
			<div className='flex flex-col lg:flex-row gap-12'>
				<BlogCards
					blogs={blogs}
					currentPage={currentPage}
					selectedCategory={selectedCategory}
					pageSize={pageSize}
				/>

				<div>
					<SideBar />
				</div>
			</div>

			{/* pagination section */}
			<div>
				<Pagination
					onPageChange={handlePageChange}
					currentPage={currentPage}
					blogs={blogs}
					pageSize={pageSize}
				/>
			</div>
		</div>
	);
};
// Export BlogPage component
export default BlogPage;
