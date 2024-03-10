// import React from 'react'

import BlogPage from "../components/BlogPage"

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

export default Blogs