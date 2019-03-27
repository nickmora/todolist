const router = require("express").Router(),
    itemsController = require("../../Controllers/itemsController")

router.route("/item")
    .post(itemsController.saveItem);

router.route("/")
    .get(itemsController.getAll);

module.exports = router;
