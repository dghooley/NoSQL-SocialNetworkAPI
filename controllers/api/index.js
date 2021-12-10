const router = require("express").Router()
const userRoutes = require("./user-controller");
const thoughtsRoutes = require("./thoughts-controller");

router.use("/user", userRoutes);
router.use("/thoughts", thoughtsRoutes);

module.exports = router;