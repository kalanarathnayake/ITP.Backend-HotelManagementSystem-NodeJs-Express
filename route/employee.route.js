const express = require("express");
const router = express.Router();

const {
    addEmployee,
    getEmployee,
} = require("../controller/Employee.controller");

//@route  POST api/Employee
//@desc   add Employee
router.post("/add", addEmployee);

//@route  GET api/Employee/all
//@desc   get all Employees
router.get("/", getEmployee);

module.exports = router;