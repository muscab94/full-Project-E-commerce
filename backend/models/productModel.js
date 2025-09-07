const mongoose = require("mongoose")
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ProductSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    desc: {type: String, required: true},
    quantity: {type: Number, required: true},
    prImage: {type: String, required: true},
    status: {type: String,  enum: ["Available", "out of stock"], default: "Available"},
},
{
    timestaps: true
}
)

ProductSchema.plugin(AutoIncrement, { inc_field: 'prId' });

module.exports = mongoose.model("product", ProductSchema)