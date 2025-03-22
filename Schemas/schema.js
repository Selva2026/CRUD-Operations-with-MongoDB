import mongoose from "mongoose";


const createschema = new mongoose.Schema({

    name: String,
    ingredients: String,
    types: String,
    cookingtime: String
});

const recipe = mongoose.model("recipe", createschema);

export default recipe;