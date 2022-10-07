import express from "express";
import { categoriesController } from "./controllers/categoriesController";
import { coursesControler } from "./controllers/coursesController";

const router = express.Router();

router.get("/categories",  categoriesController.index)
router.get("/categories/:id", categoriesController.show)

router.get("/courses/featured", coursesControler.featured)
router.get("/courses/newest", coursesControler.newest)
router.get("/courses/search", coursesControler.search)
router.get("/courses/:id", coursesControler.show)

export { router }