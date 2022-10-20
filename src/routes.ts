import express from "express";
import { authController } from "./controllers/authController";
import { categoriesController } from "./controllers/categoriesController";
import { coursesControler } from "./controllers/coursesController";
import { episodesController } from "./controllers/episodesController";
import { favoritesController } from "./controllers/favoritesController";
import { likesController } from "./controllers/likesController";
import { ensureAuth, ensureAuthViaQuery } from "./middlewares/auth";

const router = express.Router();

router.post("/auth/register", authController.register)
router.post("/auth/login", authController.login)

router.get("/categories", ensureAuth, categoriesController.index)
router.get("/categories/:id", ensureAuth, categoriesController.show)

router.get("/courses/featured", ensureAuth, coursesControler.featured)
router.get("/courses/newest", coursesControler.newest)
router.get("/courses/popular", ensureAuth, coursesControler.popular)
router.get("/courses/search", ensureAuth, coursesControler.search)
router.get("/courses/:id", ensureAuth, coursesControler.show)

router.get("/episodes/stream", ensureAuthViaQuery, episodesController.stream)

router.get("/episodes/:id/watchTime", ensureAuth, episodesController.getWatchTime)
router.post("/episodes/:id/watchTime", ensureAuth, episodesController.setWatchTime)

router.get("/favorites", ensureAuth, favoritesController.index)
router.post("/favorites", ensureAuth, favoritesController.save)
router.delete("/favorites/:id", ensureAuth, favoritesController.delete)

router.post("/likes", ensureAuth, likesController.save)
router.delete("/likes/:id", ensureAuth, likesController.delete)

export { router }