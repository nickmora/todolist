const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const moment = require("moment")

const CommentSchema = new Schema({
    date: {type: Date, default: Date.now},
    body: {type: String, required: true},
    item: {type: Schema.Types.ObjectId, ref: "Item"}
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;