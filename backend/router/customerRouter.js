const express = require("express")
const customerController = require("../controller/customerController")
const { verifyToken, isAdmin } = require("../middleware/Auth")


const router = express.Router()

router.post("/create/customer",customerController.createCustomer)
router.post("/login/customer",customerController.loginCustomer)
router.get("/read/customer", verifyToken, isAdmin ,customerController.readCustomer)

module.exports =  router