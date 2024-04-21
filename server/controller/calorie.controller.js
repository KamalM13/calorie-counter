import Calorie from "../models/calorie.model.js";
import User from "../models/user.model.js";

export const getAllCalories = async (req, res, next) => { 
    try {
        const calories = await Calorie.find();
        res.status(200).json(calories);

    } catch (error) {
        console.log(error);
        next(error)
    }
}

export const addCalorie = async (req, res, next) => { 
    try {
        const username = req.body.username;
        const description = req.body.foodInfo;
        const calories = Number(req.body.calories);
        const date = Date.parse(req.body.date);
        if (!username || !description || !calories || !date) return res.status(400).json("All fields are required")
        const existingUser = await User.findOne({
            username: username
        })
        if (!existingUser) return res.status(400).json("User does not exist")
        const addCalorie = new Calorie({
            username,
            description,
            calories,
            date,
        })
        addCalorie.save().
            then(() => res.json("Calories Added Successfully")).
            catch((err) => res.status(400).json("Error: " + err));
    } catch (error) {
        console.log(error);
        next(error)
    }
}

export const getCalorie = async (req, res, next) => { 
    try {
        const calorie = await Calorie.findById(req.params.id);
        res.status(200).json(calorie);
    } catch (error) {
        console.log(error);
        next(error)
    }
}

export const deleteCalorie = async (req, res, next) => { 
    try {
        await Calorie.findByIdAndDelete(req.params.id);
        res.status(200).json("Calories is deleted Successfully");
    } catch (error) {
        console.log(error);
        next(error)
    }
}

export const updateCalorie = async (req, res, next) => { 
    try {
        const calorie = await Calorie.findById(req.params.id);
        calorie.description = req.body.description;
        calorie.calories = Number(req.body.calories);
        calorie.date = Date.parse(req.body.date);
        calorie.save().
            then(() => res.json("Calorie Updated Successfully")).
            catch((err) => res.status(400).json("Err: " + err));
    } catch (error) {
        console.log(error);
        next(error)
    }
}

