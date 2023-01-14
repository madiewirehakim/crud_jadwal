import Matkul from "../models/matkul.js";
 
export const getMatkuls = async(req, res) =>{
    try {
        const response = await Matkul.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getMatkulById = async(req, res) =>{
    try {
        const response = await Matkul.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createMatkul = async(req, res) =>{
    try {
        await Matkul.create(req.body);
        res.status(201).json({msg: "Todo Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateMatkul = async(req, res) =>{
    try {
        await Matkul.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Todo Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteMatkul = async(req, res) =>{
    try {
        await Matkul.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Todo Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
 