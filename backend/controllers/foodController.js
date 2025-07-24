import foodModel from "../models/foodModel.js";
import fs from'fs'

// add food items

const addfood = async(req, res)=>{
    if (!req.file) {
        return res.status(400).json({success:false, message:"Image file is required"});
    }
    
    let image_filename = req.file.filename;
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true, message:"food Added"})
    } catch (error) {
        console.log(error)
        res.json({sucess:false,mesage:"error"})
        
    }

}
//all food list
const listFood = async (req, res)=>{
    try {
        const foods = await foodModel.find({});
        res.json({sucess:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({sucess:false,message:"error"})
        
    }

}

//remove food
const removeFood = async(req, res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        if (!food) {
            return res.status(404).json({success:false, message:"Food item not found"});
        }
        
        // Delete image file
        const imagePath = `uploads/${food.image}`;
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.log(`Error deleting image: ${err.message}`);
                // Continue with deletion even if file delete fails
            } else {
                console.log(`Successfully deleted image: ${food.image}`);
            }
        });
        
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food item and image removed"})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:`Error removing food: ${error.message}`});
    }

}
export{addfood, listFood, removeFood}