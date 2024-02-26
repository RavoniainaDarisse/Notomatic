import express  from "express";
import { createController, delet, findId, update, viewsController } from "../Controller/crud.js";
import  Inscription  from "../Controller/Auth.js";
import  connex  from "../Controller/Connex.js";
const router = express.Router();

router.get('/api',viewsController);
router.get('/api/:_id',findId);
router.post('/api/create',createController);
router.patch('/api/update/:_id',update);
router.delete('/api/delete/:_id',delet)
router.post('/api/Inscription',Inscription);
router.post('/api/connexion',connex);
export default router;