const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    date: {type: Date, default: Date.now},
    body: {type: String, required: true}
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;