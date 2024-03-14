const express = require('express')
const app = express()
const cors = require('cors')
const blogs = require('./api/blogsData.json') // Importing JSON data containing blogs
const port = process.env.PORT || 5000; // Setting port, either from environment variable or default to 5000

// middleware
app.use(cors()) // Enable CORS for cross-origin requests
app.use(express.json()) // Parse JSON request bodies

app.get('/', (req, res) => {
    res.send("Blog server is running!") // Sending a simple response to confirm server is running
});

app.get('/blogs', (req, res) => {
  res.send(blogs) // Sending all blogs data as response
})
app.get('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id); // Extracting blog ID from URL parameter
  // console.log(id)
  const blog = blogs.filter(b => b.id === id);
  // console.log(blog)
  res.send(blog) // Sending the found blog as response
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
