const express = require("express")
const AdminController = require("../controller/AdminController")


const router = express.Router()

router.post("/create/Admin",AdminController.createAdmin)
router.post("/login/Admin",AdminController.AdminLogin)


module.exports =  router