const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

// routes
app.use(
	'/api/test', 
	require(
		path.join(__dirname, 'routes', 'test.js')
	)
);


app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
});