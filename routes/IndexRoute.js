const express = require("express");
const router = express.Router();

/*------<ROUTES>------*/
const authRoute = require("./user/AuthRoute");
router.use("/auth", authRoute);
const adminRoute = require("./admin/UserRoutes");
router.use("/admin", adminRoute);
const adminProductRoute = require("./admin/ProductRoutes");
router.use("/admin/product", adminProductRoute);
const userRoute = require("./user/UserRoute");
router.use("/user", userRoute);
const walletRoute = require("./user/WalletRoute");
router.use("/wallet", walletRoute);
const fileRoute = require("./user/FileRoutes");
router.use("/file",fileRoute);
const productRoute = require("./user/ProductRoute");
router.use("/product",productRoute);
// const reqRouter = require("./../routes/requestRoutes")
// router.use("/req",reqRouter)

module.exports = router;