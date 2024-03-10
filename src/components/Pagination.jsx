import React from 'react';

const Pagination = ({ onPageChange, currentPage, blogs, pageSize }) => {
	const totalPages = Math.ceil(blogs.length / pageSize);

	const renderPagination = () => {
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
	return (
		<ul>
			<li>
				<button
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 1}>
					Previous
				</button>
			</li>
			<div>{renderPagination}</div>
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

export default Pagination;
