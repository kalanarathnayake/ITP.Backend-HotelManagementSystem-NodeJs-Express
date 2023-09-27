const express = require("express");
const router = express.Router();

const {
    addCustomerReq,
    getCustomerReqs,
    updateCustomerReq,
    getCustomerReqById,
    deleteCustomerReq

} = require("../controller/CustomerRequest.controller");

router.post("/", addCustomerReq);
router.get("/", getCustomerReqs);
router.get("/:id", getCustomerReqById);
router.put("/:id", updateCustomerReq);
router.delete("/:id", deleteCustomerReq);

module.exports = router;