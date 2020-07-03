const multer = require('multer')
const path = require('path')

//set storage engine
const storage = multer.diskStorage({
    destination: './public/images/',
    filename: function (req, file, cb) {
        cb(null, file.field_name + '-' + Date.now() + path.extname(file.originalname))
    }
})

//initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function(req, file, cb){
        //Allowed extensions
        let fileTypes = /jpeg|jpg|png|gif/
        //check file extension
        let extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
        //Check mime type
        let mimetype = fileTypes.test(file.mimetype)

        if (mimetype && extname){
            return cb(null, true)
        }else{
            cb('Error: Images Only Man!')
        }
    }
}).single('image')

module.exports = upload