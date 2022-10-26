/*------<INTIATE MULTER>------*/
const multer = require("multer");
/*------<MULTER PATH STORE>------*/
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/image/");
  },
  filename: async (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const uniqueSuffix = `${req.userId}-${Date.now()}.${ext}`;
    cb(null, uniqueSuffix);
  },
});
/*------<MULTER FILE FILTER>------*/
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(
      res
        .status(401)
        .send("CLIENT ERROR :: PLEASE UPLOAD FILE WITH CORRECT FORMAT"),
      false
    );
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
/*------<EXPORT MULTER>------*/
exports.uploadUserFile = upload.single("userFile");
