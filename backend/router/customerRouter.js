const express = require("express")
const customerController = require("../controller/customerController")


const router = express.Router()

router.post("/create/customer",customerController.createCustomer)
router.post("/login/customer",customerController.loginCustomer)


module.exports =  router