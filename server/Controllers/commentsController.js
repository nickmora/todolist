const db = require("../Models");

module.exports = {
    saveComment: function (req, res) {
        db.Comment.create(req.body)
            .then(dbComment => {
                db.Item.findOneAndUpdate({ id: req.params.id }, { $push: {comment: dbComment} }, dbItem => {
                    console.log(dbItem)
                    res.json(dbItem).status(200)
                })
            })
    },
    getAllComments: function (req, res) {
        db.Comment.find({ item: req.params.id })
            .then(dbComment => {
                // console.log(dbComment);
                res.json(dbComment).status(200)
            }).catch(err => res.json(err))
        // db.Item.findOne({_id: req.params.id})
        //     .populate("Comment")
        //     .then(comments=>{
        //         console.log(comments)
        //         res.json(comments).status(200)
        //     }).catch(err=>res.json(err))
    },
    deleteComment: function (req, res) {
        console.log("Hello from controller", req.params.id)
        db.Comment.deleteOne({ _id: req.params.id})
            .then(allComments => res.json(allComments))
            .catch(err => res.status(422).json(err))
    }
}