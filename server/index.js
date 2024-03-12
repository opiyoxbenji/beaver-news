// const express = require('express')
// const app = express()
// const cors = require('cors')
// const blogs = require('./api/blogsData.json')
// const port = process.env.PORT || 5000;

// // middleware
// app.use(cors())
// app.use(express.json())

// app.get('/', (req, res) => {
//     res.send("Blog server is running!")
// });

// app.get('/blogs', (req, res) => {
//   res.send(blogs)
// })
// app.get('/blogs/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   // console.log(id)
//   const blog = blogs.filter(b => b.id === id);
//   // console.log(blog)
//   res.send(blog)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express');
const axios = require('axios'); // Import Axios for HTTP requests
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// Define the base URL of the remote data source
const BASE_URL = 'https://beaver-news-server.onrender.com';

app.get('/', (req, res) => {
	res.send('Blog server is running!');
});

// Fetch all blogs from the remote data source
app.get('/blogs', async (req, res) => {
	try {
		const response = await axios.get(`${BASE_URL}/blogs`);
		res.send(response.data);
	} catch (error) {
		res.status(500).send('Error fetching blogs');
	}
});

// Fetch a specific blog by ID from the remote data source
app.get('/blogs/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		const response = await axios.get(`${BASE_URL}/blogs/${id}`);
		res.send(response.data);
	} catch (error) {
		res.status(404).send('Blog not found');
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
