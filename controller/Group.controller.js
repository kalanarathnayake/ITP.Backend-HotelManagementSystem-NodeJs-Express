const Group = require("../model/Group.model");

// add Group
const addGroup = async (req, res) => {

    const { participants, grpName, date, description} = req.body;
    const group = new Group({
        participants,
        grpName,
        date,
        description,
    });

    await group.save()
        .then(() => res.json('group created!'+ group))
        .catch(err => res.status(400).json('Error (create): ' + err));
}

// update Group
const updateGroup = async (req, res) => {
    Group.findByIdAndUpdate(req.params.id)
        .then((existingGroup) => {
            existingGroup.participants = req.body.participants;
            existingGroup.grpName = req.body.grpName;
            existingGroup.date = Date.parse(req.body.date);
            existingGroup.description = req.body.description;

            existingGroup.save()
                .then((updatedGroup) => res.json("Group Details Updated : "+updatedGroup))
                .catch((error) => res.status(400).json("Error:" + error ));
        })
        .catch((error) => res.status(400).json("Error (update): " + error));
}

// delete Group
const deleteGroup = async (req, res) => {
    console.log(req.params.id);
    Group.findByIdAndDelete(req.params.id)
        .then(() => res.json('Group deleted'))
        .catch(err => res.status(400).json('Error (delete): ' + err));
};

// get Group by id
const getGroupById = async (req, res) => {
    try {
        const group = await Group.findById(req.params.id);
        if (group)
            res.json(group);
        else {
            res.json("No group from this ID")
        }
    } catch (error) {
        res.status(500).send("Server Error : " + error);
    }
};

// get all Groups
const getGroup = async (req, res) => {
    try {
        const group = await Group.find();
        res.json(group);
    } catch (error) {
        res.status(500).send("Server Error (getAll): " + error);
    }
}

//export 
module.exports = {
    addGroup,
    getGroupById,
    deleteGroup,
    getGroup,
    updateGroup,
};