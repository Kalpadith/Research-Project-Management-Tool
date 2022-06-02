import Users from '../models/users.js';

export const assignUserForGroup = async (req, res) => {
    const {group_id, user_id} = req.body;
    try {
        const result = await Users.findByIdAndUpdate(user_id,
            {
                $push: {user_groups: group_id}
            }, {
                new: true,
                useFindAndModify: false
            });

        res.status(201).json(result);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}




export const removeUserFromGroup = async (req, res) => {
    const {group_id, user_id} = req.body;
    try {
        const result = await Users.findByIdAndUpdate(user_id,
            {
                $pull: {user_groups: group_id}
            }, {
                new: true,
                useFindAndModify: false
            });

        res.status(201).json(result);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getUserGroups = async (req, res) => {

    const {id} = req.query;
    console.log(id);
    try {
        const result = await Users.findById(id).populate('user_groups');
        console.log(result);
        res.status(200).json(result.user_groups);
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message});
    }
}
