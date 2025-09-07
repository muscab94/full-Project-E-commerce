const express = require("express")
const productController = require("../controller/productController")
const uploaImage = require("../middleware/uploadImage")

const router = express.Router()

router.post("/create/product", uploaImage.single("images"), productController.createProduct)
router.get("/read/product", productController.readProduct)
router.get("/readSingle/product/:id", productController.readSingleProduct)
router.delete("/delete/product/:id", productController.deleteProduct)
router.put("/update/product/:id", uploaImage.single("images"), productController.UpdateProduct)

module.exports =  router