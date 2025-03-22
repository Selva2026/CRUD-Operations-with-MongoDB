import recipe from '../Schemas/schema.js';


export const createdata = async (req, res)=>{
    try {
        
        const addrecipe = await recipe.create(req.body);
        res.status(200).json(addrecipe);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const viewdata = async (req, res)=>{
    try {
        
        const viewalldata = await recipe.find();
        res.status(200).json(viewalldata);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const viewbyId = async (req, res)=>{
    try {
        const viewrecipe= await recipe.findById(req.params.id)
        res.status(200).json(viewrecipe)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const updateById = async (req, res) => { 
    try {
      const recipeId = req.params.id;
      const {  name, ingredients, types , cookingtime } = req.body;
      
      const updateRecipe = await recipe.findByIdAndUpdate(
        recipeId,
        { name, ingredients, types , cookingtime },
        { new: true }
      );
      if (!updateRecipe) {
        return res.status(404).json({ message: "Recipe not found" });
      }
  
      res.status(200).json({ message: "Recipe updated successfully", data: updateRecipe });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export  const deleteById = async (req, res)=>{
    try {
        const recipeid = req.params.id;
        const deleteRecipe = await recipe.findByIdAndDelete(recipeid);
        if (!deleteRecipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.status(200).json({ message : "Recipe deleted Successfully" ,data : deleteRecipe});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }