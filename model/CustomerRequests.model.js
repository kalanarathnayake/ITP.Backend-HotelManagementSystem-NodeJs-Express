const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerRequestSchema = new Schema({
    email: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, required: true }
}, {
    timestamps: true,
});

const CustomerRequest = mongoose.model("CustomerRequrst", customerRequestSchema);
module.exports = CustomerRequest;