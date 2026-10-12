import type { Request, Response, NextFunction } from "express";
import { projectsService } from "../services/index.js";

const getProjects = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const projects = await projectsService.getProjects();
        return res.status(200).json(projects);
    }
    catch (error) {
        next(error)
    }
}

export {
    getProjects
}