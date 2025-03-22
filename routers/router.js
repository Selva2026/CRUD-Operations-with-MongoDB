import express from 'express';
import { createdata, updateById, viewbyId, deleteById,viewdata } from '../controllers/crudcontroller.js';


const routers = express.Router();

routers.post("/create", createdata);
routers.get("/view", viewdata);
routers.get("/idview/:id", viewbyId);
routers.put("/idedit/:id", updateById);
routers.delete("/delete/:id",deleteById)

export default routers;
