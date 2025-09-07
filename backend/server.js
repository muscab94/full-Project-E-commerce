const experess = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const productRouter = require("./router/productRouter")
const cors = require("cors")


const app = experess()
app.use(experess.json())
// 
const PORT = process.env.port || 7000

// connnecting
mongoose.connect(process.env.db_Url).then(() => {
    console.log("connecting database...")
})

app.use(cors())
app.use(productRouter)
app.use("/allimages", experess.static("images"))

app.listen(PORT, () => console.log(`server is runing....${PORT}`))