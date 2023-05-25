const express = require("express");

const app = express();
const dbConfig = require('./db')
const employeeRoutes = require('./routes/employeeRoutes');
app.use(express.json())
app.use('/api/employees', employeeRoutes)
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Node server started by using nodemon"))