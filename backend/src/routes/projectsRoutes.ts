import { Router } from "express";
import { projectsController } from "../controllers/index.js";

const router = Router();

router.get("/", projectsController.getProjects);

export {
    router
}