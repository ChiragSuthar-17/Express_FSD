const express = require ("express");
const dotenv = require ("dotenv");
const connectDb = require ('./src/config/db.js');
const productRoutes = require('./src/routes/productRoutes.js')
const logger = require("./src/middleware/logger.js");
const errorHandler = require("./src/middleware/errorHendler.js");


dotenv.config();  // Read .env file secrets
connectDb()
const app= express();


// -- Build-in Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true} ) );
app.use(logger);

// ---Health check-up
app.get('/', (req,res) =>{
    res.json({Message: 'Product API is running '});
});

app.use('/api/products', productRoutes);

// ---Error hendler
app.use(errorHandler);


// --- Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
});