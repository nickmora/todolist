const db = require("../Models");

module.exports = {
    saveItem: function (req, res) {
        db.Item.create({
            title: req.body.itemTitle,
            body: req.body.itemBody
        }).then(function (resp) {
            console.log(resp)
            console.log("Item Saved to Database!")
        }).catch(err => res.json(err))
    },
    getAll: function (req, res) {
        db.Item.find({})
            .then(allItems => {
                console.log(allItems);
                return res.json(allItems)
            }
            )
            .catch(err => console.log(err))
    },
    deleteItem: function (req, res) {
        db.Comment.deleteMany({ item: req.params.id }, function (err) {
            if (err) console.log(err);

        }).then(
            db.Item.deleteOne({ _id: req.params.id })
                .then(allItems => res.json(allItems))
                .catch(err => res.status(422).json(err))
        )
    },
    updateItem: function (req, res) {
        db.Item
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
}