const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({ 
    filename: function (req,file, callback) {
        callback(null,new Date().toISOString().replace(/:/g, '-')+file.originalname);
    },
    destination: function (req, file, callback) {
        // console.log(`destination: ${path.join(__dirname,"../../uploads/")}`)
        callback(null, path.join(__dirname, "../uploads/"));
    }
});

const upload = multer({
    storage: storage,
});

module.exports = upload;