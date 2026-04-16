const mongose = require('mongoose');

const productSchema = new mongose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Product name is required'],
            trim: true,
            maxLength: [100, 'Name should exceed 100 charachters']
        },
        description: {
            type: String,
            trim: true
        },
        price: {
            type: Number,
            required: [true, 'Price is required'],
            min: [0, 'Price cannot be negative']
        },
        category: {
            type: String,
            enum: ['electronics', 'clothing', 'food', 'others'],
            default: 'others'
        },
        stock: {
            type: Number,
            default: 0,
            min: [0, 'Stack cannot be negative']
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongose.model("Product", productSchema);