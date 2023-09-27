const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaveSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    empId: { type: String, required: true },
    position: { type: String, required: false },
    fromD: { type: Date, required: true },
    toD: { type: Date, required: true },
    nod: { type: String, required: true },
    reason: { type: String, required: true },
    status: { type: String, required: true },

}, {
    timestamps: true,
});

const Leave = mongoose.model("Leave", leaveSchema);
module.exports = Leave;