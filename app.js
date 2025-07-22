const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRoutes = require('./routes/posts');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 Blog Backend API is Running</h1>
    <p>Use the following endpoints:</p>
    <ul>
      <li>GET <code>/posts</code> - List blog posts</li>
      <li>POST <code>/posts</code> - Create a blog post (JSON)</li>
    </ul>
  `);
});

app.listen(port, () => {
  console.log(`Server running on http://3.106.170.151:3000`);
});

