const mongoose = require("mongoose")

const AdminSchema = mongoose.Schema({
    name: {type: String, required: true},
      email: {type: String, required: true, unique: true},
       password: {type: String, required: true},
       role: {type: String, enum: ["Admin", "user"], default: "user"}
}) 

module.exports = mongoose.model("Admin", AdminSchema)