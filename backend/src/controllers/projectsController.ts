import type { Request, Response} from "express";
import { projectsService } from "../services/index.js";

const getProjects = async (req: Request, res: Response) => {
    const projects = await projectsService.getProjects();
    return res.status(200).json(projects);
}

export {
    getProjects
}