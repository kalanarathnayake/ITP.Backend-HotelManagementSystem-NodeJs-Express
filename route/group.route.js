const express = require("express");
const router = express.Router();

const {
    addGroup,
    getGroupById,
    deleteGroup,
    getGroup,
    updateGroup,
} = require("../controller/Group.controller");

//@route  POST api/Group
//@desc   add Group
router.post("/add", addGroup);

//@route  GET api/Group
//@desc   get Group by Id
router.get("/:id", getGroupById);

//@route  DELETE api/Group
//@desc   delete Group
router.delete("/:id", deleteGroup);

//@route  GET api/Group/all
//@desc   get all Groups
router.get("/", getGroup);

//@route  PUT api/Group
//@desc   update Group
router.put("/:id", updateGroup);


module.exports = router;

