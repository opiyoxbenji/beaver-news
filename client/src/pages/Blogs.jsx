// import React from 'react'

import BlogPage from "../components/BlogPage"
// Blogs component
const Blogs = () => {
  return (
    <div>
      <div className="py-40 bg-blue-950 text-center text-white px-4">
        <h2 className="text-5xl lg:text-5xl leading-snug font-bold mb-5">Blog Page</h2>
      </div>

      {/* blogs container */}
      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  )
}
// Export Blogs component
export default Blogs
