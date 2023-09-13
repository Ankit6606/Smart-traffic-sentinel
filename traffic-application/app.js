// app.js
const express = require('express');
const app = express();
const port = 3000;

// Import routes
const indexRouter = require('./routes/index');

app.use(express.json());

// Use routes
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
