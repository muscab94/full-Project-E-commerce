const AdminModel = require("../models/AdminModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
// create
const createAdmin = async(req,res) => {
   const {name, email, password} = req.body

   const existEmail = await AdminModel.findOne({email})
   if(existEmail){
    res.status(400).json({message: "email is exists"})
   }

//    hash password
const hashpassword = await bcrypt.hash(password, 10)

const newData = new AdminModel({
    name,email,password: hashpassword
})
await newData.save()
res.send(newData)
}



// Login
const AdminLogin = async (req, res) => {
    try {

        const { email, password } = req.body

        const exisistEmail = await AdminModel.findOne({ email })

        if (!exisistEmail) {
            res.status(400).json({ message: "Incorect email" })
        }

        const checkPassowrd = await bcrypt.compare(password,exisistEmail.password)

        if(!checkPassowrd){
            res.status(400).json({ message: "Incorect passowrd" })
        }

        const token = jwt.sign(
            {id: exisistEmail._id, name: exisistEmail.name, email: exisistEmail.email, role:exisistEmail.role },
            process.env.JWT_Secret,
            {expiresIn: "2h"}
        )

        res.send({
            message: "Welcome Back",
        Admin:{
                name: exisistEmail.name,
                email: exisistEmail.email,
                role: exisistEmail.role
            },
            token
        })

    } catch (error) {
        res.status(400).json({ error: "server error" })

    }
}


module.exports = {createAdmin, AdminLogin}