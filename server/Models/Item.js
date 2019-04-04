const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment")

const ItemSchema = new Schema({
    title: {type: String, required: true},
    date: {type: Date, default: Date.now},
    complete: {type: Boolean, default: false},
    body: {type: String, required: true},
    comment: [{type: Schema.Types.ObjectId, ref: "Comment"}]
});

const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;