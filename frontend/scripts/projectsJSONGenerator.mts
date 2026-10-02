import { projectsService } from '../src/service/index';
import * as fs from "fs/promises";
import * as path from "path";
import { appConfig } from '../src/config/index';
import { fileURLToPath } from 'url';

const fetchProjects = async () => {
    const projects = await projectsService.getProjects();
    return projects;
}

const saveProjects = async (projects: unknown) => {
    const jsonString = JSON.stringify(projects);
    const scriptsDirectory = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.resolve(scriptsDirectory, "../src/data/projects.json")

    try {
        await fs.writeFile(filePath, jsonString, "utf-8");
    }
    catch (error) {
        console.log("File is not written")
        if (!appConfig.isProd){
            console.log(`Error writing file: ${error}`);
        }
        return;
    }
    console.log("File written");
}

const generateProjectsJSON = async () => {
    const projects = await fetchProjects();
    await saveProjects(projects);
}

await generateProjectsJSON();