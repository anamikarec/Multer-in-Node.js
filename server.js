const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const connect = require('./app/config/db')
const UserRoute = require('./app/routes/user.route')
const ProductRoute = require('./app/routes/product.route')
app.use(cors());
app.use(express.json());
app.use("/users",UserRoute);
app.use("/product",ProductRoute);
const PORT = process.env.PORT || 5000;
const start = async () => {
    await connect();

    app.listen(PORT,()=>{
        console.log(`listening on port ${PORT}`)
    })
}
module.exports = start;