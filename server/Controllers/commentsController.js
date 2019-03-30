const db = require ("../Models");

module.exports = {
    saveComment: function (req, res) {
        db.Comment.create(req.body)
            .then(dbComment =>{
                return db.Item.findByIdAndUpdate(req.params.id, {comment:dbComment.id}, dbItem => {
                    console.log(dbItem)
                    res.json(dbItem).status(200)
                })
            })
    },
    getAllComments: function (req, res) {
        db.Item.findOne({_id: req.params.id})
            .populate("Comment")
            .then(comments=>{
                console.log(comments)
                res.json(comments).status(200)
            }).catch(err=>res.json(err))
    }
}