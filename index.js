const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const route = require('./routes/routes')

dotenv.config();

const app = express();
const port = process.env.PORT;

// security middlewares
app.use(helmet());
app.use(xss());
app.use(hpp());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/comments', route )
app.use('/api/posts', route )

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});