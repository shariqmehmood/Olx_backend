const fs = require("fs");
const path = require("path");
const multer = require("multer");

function uploadImage() {
  const storage = multer.diskStorage({
    filename: function (req, file, cb) {
      const userName = req?.body?.email?.split("@")[0] || "games";
      cb(
        null,
        file.fieldname +
        "_" +
        Date.now() +
        "_" +
        userName +
        "_" +
        file.originalname.replace(/ /g, "_")
      );
    },
  });

  return multer({
    storage,
    limits: 1024 * 1024 * 5, // 5 MB
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|png|jpg|svg|pdf/ 
      const extname = fileTypes.test(
        path.extname(file.originalname).toLowerCase()
      );
      const mimeType = fileTypes.test(file.mimetype);
      if (mimeType && extname) {
        return cb(null, true);
      } else {
        cb("Error: invalid file type");
      }
    },
  });
}

module.exports.uploadImage = uploadImage;