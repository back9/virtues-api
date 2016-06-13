'use strict';
const express = require('express');
const routes = require('./routes');

let app = express();

// routes
routes.init(app);

// server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Now listening on ${port}. Fire away.`));

