// For the next, previous and page numbers

// Pagination component
const Pagination = ({ onPageChange, currentPage, blogs, pageSize }) => {
	// Calculate total pages based on the number of blogs and page size
	const totalPages = Math.ceil(blogs.length / pageSize);

	// Function to render pagination links
	const renderPaginationLinks = () => {
		// Create an array of page numbers
		return Array.from({ length: totalPages }, (_, i) => i + 1).map(
			pageNumber => (
				<li
					className={
						pageNumber === currentPage ? 'activePagination' : ''
					}
					key={pageNumber}>
					<a href='#' onClick={() => onPageChange(pageNumber)}>
						{pageNumber}
					</a>
				</li>
			)
		);
	};

	// Render Pagination component
	return (
		<ul className='pagination my-8 flex-wrap gap-4'>
			<li>
				<button
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 1}>
					Previous
				</button>
			</li>
			<div className='flex gap-1'>{renderPaginationLinks()}</div>
			<li>
				<button
					onClick={() => onPageChange(currentPage + 1)}
					disabled={currentPage === totalPages}>
					Next
				</button>
			</li>
		</ul>
	);
};
export default Pagination; // Export Pagination component
