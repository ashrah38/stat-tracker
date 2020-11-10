const express = require('express');
const app = express();
app.use("/assets", express.static("assets"));


// Routes
app.use('/', require('./routes/routes.js'));

//Initializing port
app.listen(3000, () => console.log('Port Init'));