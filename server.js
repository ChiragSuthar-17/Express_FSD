const express = require ("express");
const dotenv = require ("dotenv");
const connectDb = require ('./src/config/db.js');


dotenv.config();  // Read .env file secrets
connectDb()
const app= express();


// -- Build-in Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true} ) );


// ---Health check-up
app.get('/', (req,res) =>{
    res.json({Message: 'Product API is running '});
});


// --- Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
});