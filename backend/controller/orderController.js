const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")

const createOrder = async (req,res) => {
    const {customer, products} = req.body

    if(!products || products.length === 0) {
        return res.send.status(400).json({message: "product is required"})
    }

    let TotalAmount = 0
    let orders = []

    for(let items of products){
    
        const productData = await productModel.findById(items.productId)

        if(!productData){
          return  res.status(400).json({error: `this product not found`})
        }

        // total amount
        let price = productData.price
        let total = price * items.quantity
        TotalAmount += total


        // quantity
        if(items.quantity > productData.quantity){
            return res.status(400).json({message: "this product out of stock"})
        }

        productData.quantity -= items.quantity
        await productData.save()

        orders.push({
            productId: productData._id,
            quantity: items.quantity,
            price,
            total
        })

    }

    const newData = new orderModel({
        customer,
        products: orders,
        TotalAmount
    })

    await newData.save()

    res.send(newData)
}

module.exports = {createOrder}