const customerModel = require("../models/customer")
const bcrypt = require("bcryptjs")
// create
const createCustomer = async(req,res) => {
   const {name, phone, email, password} = req.body

   const existEmail = await customerModel.findOne({email})
   if(existEmail){
    res.status(400).json({message: "email is exists"})
   }

//    hash password
const hashpassword = await bcrypt.hash(password, 10)

const newData = new customerModel({
    name,phone,email,password: hashpassword
})
await newData.save()
res.send(newData)
}



// Login
const loginCustomer = async (req, res) => {
    try {

        const { email, password } = req.body

        const exisistEmail = await customerModel.findOne({ email })

        if (!exisistEmail) {
            res.status(400).json({ message: "Incorect email" })
        }

        const checkPassowrd = await bcrypt.compare(password,exisistEmail.password)

        if(!checkPassowrd){
            res.status(400).json({ message: "Incorect passowrd" })
        }

        res.send({
            message: "Welcome Back",
            customer:{
                name: exisistEmail.name,
                phone: exisistEmail.phone,
                email: exisistEmail.email,
            }
        })

    } catch (error) {
        res.status(400).json({ error: "server error" })

    }
}

const readCustomer = async(req,res) => {
    const readData = await customerModel.find()
    if(readData){
        res.send(readData)
    }
}


module.exports = {createCustomer, loginCustomer, readCustomer}