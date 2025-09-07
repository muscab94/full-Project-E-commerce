const multer = require("multer")

const storeImage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
     cb(null, file.originalname)
    }
})

const UploadImage = multer({
    storage: storeImage
})

module.exports = UploadImage