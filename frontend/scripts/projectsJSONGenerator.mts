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
        if (await checkLocalProjectsJSON(filePath, jsonString)){
            console.log("File is unchanged");
            return;
        }
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

const checkLocalProjectsJSON = async (filePath: string, jsonString: string) => {
    try {
        const existingJSON = await fs.readFile(filePath, "utf-8");
        if(JSON.parse(existingJSON)){
            if (existingJSON === jsonString){
                return true;
            }
        }
    }
    catch (error) {
        console.log("Old projects json doesnt exist")
    }
    return false;
}

const generateProjectsJSON = async () => {
    const projects = await fetchProjects();
    await saveProjects(projects);
}

await generateProjectsJSON();