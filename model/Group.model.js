const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    participants: { type: [String], required: true },
    grpName: { type: String, required: true},
    date: { type: Date, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
})

module.exports = Group = mongoose.model("Group", groupSchema);