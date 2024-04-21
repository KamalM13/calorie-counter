import User from "../models/user.model.js";



export const getUsers = async (req, res, next) => { 
    try {
        const users = await User.find();
        res.status(200).json(users);

    } catch (error) {
        console.log(error);
        next(error)
    }
}

export const addUser = async (req, res, next) => { 
    try {
        const username = req.body.username;
        const newUser = new User({ username });
        await newUser.save();
        res.status(201).json("User added Successfully");
    } catch (error) {
        console.log(error);
        next(error);
    }
}
