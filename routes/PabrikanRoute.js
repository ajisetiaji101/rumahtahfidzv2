import { Router } from "express";
import indexController from "../controller/IndexController.js";

const router = Router();

router.get("/listpabrikan", indexController.PabrikanController.getDataNoParam);

export default router;
