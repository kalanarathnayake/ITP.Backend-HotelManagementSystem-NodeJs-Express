const Employee = require("../model/Employee.model");

// add Employee
const addEmployee = async (req, res) => {
    const {name} = req.body;
    const employee = new Employee({
        name,
    });

    await employee.save()
        .then(() => res.json('Emp added!'+ employee))
        .catch(err => res.status(400).json('Error (create): ' + err));
}

// get all Employee
const getEmployee = async (req, res) => {
    try {
        const employee = await Employee.find();
        res.json(employee);
    } catch (error) {
        res.status(500).send("Server Error (getAll): " + error);
    }
}

//export 
module.exports = {
    addEmployee,
    getEmployee,
};