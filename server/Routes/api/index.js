const items = require("./items"),
    router = require("express").Router()

router.use("/item", items)

module.exports = router