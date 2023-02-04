const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const routesFunction = require('./routes/htmlRoutes');

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add all of my routes to the express app
routesFunction(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
