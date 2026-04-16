const Product = require('../models/Product');

const getAllProducts = async(req, res, next) => {
    try{
        const {category, minPrice, maxPrice} = req.query;
        const filter = {};

        if(category) filter.category = category;
        if(minPrice) filter.price = {$gte: Number(minPrice)};
        if(maxPrice) filter.price = {...filter.price, $lte: Number(maxPrice)}

        const products = await Product.find(filter).sort({createdAt: -1});

        res.status(200).json({
            success:true,
            count: products.length,
            data: products
        });
    }
    catch(error){
        next(error);
    }
};