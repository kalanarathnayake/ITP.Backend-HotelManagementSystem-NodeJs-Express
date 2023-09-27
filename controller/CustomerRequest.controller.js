const CustomerRequest = require("../model/CustomerRequests.model");

//Add new customer
const addCustomerReq = async (req, res) => {
    const { email, description, status } = req.body;

    const customerRequst = new CustomerRequest({
        email,
        description,
        status
    });

    await customerRequst
        .save()
        .then(() =>
            res.json('Request created!'),
            console.log(customerRequst)
        )
        .catch((error) => res.status(400).json("Error: " + error));
};

//Get all customers list
const getCustomerReqs = async (req, res) => {
    try {
        const customerReq = await CustomerRequest.find();
        res.json(customerReq);
        console.log(customerReq);
    } catch (error) {
        res.status(500).send("Server Error" + error);
    }
};

//Get customer details by id
const getCustomerReqById = async (req, res) => {
    try {
        const customerReq = await CustomerRequest.findById(req.params.id);
        res.json(customerReq);
        console.log(customerReq);
    } catch (error) {
        res.status(500).send("Server Error" + error);
    }
};

//Update customer details
const updateCustomerReq = async (req, res) => {
    CustomerRequest.findByIdAndUpdate(req.params.id)
        .then((existingCustomerReq) => {
            existingCustomerReq.email = req.body.email;
            existingCustomerReq.description = req.body.description;
            existingCustomerReq.status = req.body.status;
            existingCustomerReq
                .save()
                .then(() => res.json('Customer request update success!'))
                .catch((error) => res.status(400).json("Error: " + error));
        })
        .catch((error) => res.status(400).json("Error: " + error));
};

//Delete customer details
const deleteCustomerReq = async (req, res) => {
    CustomerRequest.findByIdAndDelete(req.params.id)
        .then((deletedCustomer) => {
            res.json('Customer request deleted');
            console.log(req.params.id)
        })
        .catch((error) => res.status(400).json("Error: " + error));
};

//export customer controller functions 
module.exports = {
    addCustomerReq,
    getCustomerReqs,
    getCustomerReqById,
    updateCustomerReq,
    deleteCustomerReq,
}