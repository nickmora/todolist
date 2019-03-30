const router = require("express").Router(),
    itemsController = require("../../Controllers/itemsController"),
    commentsController = require("../../Controllers/commentsController")

router.route("/")
    .post(itemsController.saveItem)
    .get(itemsController.getAll);

router.route("/:id")
    .delete(itemsController.deleteItem)
    .put(itemsController.updateItem)
    .post(commentsController.saveComment)
    .get(commentsController.getAllComments)

module.exports = router;
