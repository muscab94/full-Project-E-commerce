const productModel = require("../models/productModel")

// create
const createProduct = async (req,res) => {


 try {
      const {name, price, desc, quantity} = req.body
      const newData =  productModel({
        name: name,
        price: price,
        desc: desc,
        quantity: quantity,
        prImage: req.file.filename
  })

  await newData.save()
  res.send(newData)
 } catch (error) {

    res.send(400).json({message: "server error"})
    
 }
}
// read
const readProduct = async (req,res) => {
   const newData = await  productModel.find()
   if(newData){
      res.send(newData)
   }
}
// readSingle
const readSingleProduct = async (req,res) => {
   const readSingle = await productModel.find({_id: req.params.id})
   if(readSingle){
      res.send(readSingle)
   }
}
// delete
const deleteProduct = async (req,res) => {
   const deleteData = await productModel.deleteOne({_id: req.params.id})
   if(deleteData){
      res.send("success delete")
   }
}

const UpdateProduct = async (req, res) => {
    const updateData = await productModel.updateOne(
        { _id: req.params.id },
        {
            $set: {
                prImage: req.file ? req.file.filename : undefined,
                name: req.body.title,
                desc: req.body.desc,
                price: req.body.price,
                 quantity: req.body.quantity
            }
        }
    );

    if (updateData) {
        res.send("succsess Updated..")
    }
}

module.exports = {createProduct, readProduct, readSingleProduct, deleteProduct, UpdateProduct}