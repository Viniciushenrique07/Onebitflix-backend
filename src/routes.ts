import express from "express";
import { categoriesController } from "./controllers/categoriesController";
import { coursesControler } from "./controllers/coursesController";
import { episodesController } from "./controllers/episodesController";

const router = express.Router();

router.get("/categories",  categoriesController.index)
router.get("/categories/:id", categoriesController.show)

router.get("/courses/featured", coursesControler.featured)
router.get("/courses/newest", coursesControler.newest)
router.get("/courses/search", coursesControler.search)
router.get("/courses/:id", coursesControler.show)

router.get("/episodes/stream", episodesController.stream)

export { router }