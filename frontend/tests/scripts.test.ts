import {
    describe,
    it,
    expect
} from "vitest";
import { 
    createServer, 
    isRunnableDevEnvironment 
} from "vite";
import * as fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from 'url';
import { projectsTypes } from '../src/types';

describe("Test scripts", () => {
    it("generate json", async () => {
        const getProjectsJSON = async (): Promise<projectsTypes.Project[] | undefined> => {
            const testsDirectory = path.dirname(fileURLToPath(import.meta.url));
            const filePath = path.resolve(testsDirectory, "../src/data/projects.json");
            try {
                const jsonData = await fs.readFile(filePath);
                return JSON.parse(jsonData.toString());
            }
            catch {
                return undefined;
            }
        }

        const server = await createServer({
            server: {
                middlewareMode: true,
            },
        });

        try {
            const environment = server.environments.ssr;

            if (!isRunnableDevEnvironment(environment)) {
                throw new Error("Vite SSR environment is not runnable");
            }

            await environment.runner.import("/scripts/projectsJSONGenerator.mts");
        } finally {
            await server.close();
        }

        const projectsJSON = await getProjectsJSON();

        expect(projectsJSON).toBeDefined();
        expect(Array.isArray(projectsJSON)).toBe(true);

        if(projectsJSON){
            projectsJSON.forEach((project) => {
                expect(typeof project.name).toBe("string");
                expect(typeof project.html_url === "string" || project.html_url === null).toBe(true);
                expect(typeof project.description === "string" || project.description === null).toBe(true);
                expect(typeof project.homepage === "string" || project.homepage === null).toBe(true);
                expect(project.languages === null || (
                    typeof project.languages === "object" && 
                    Object.values(project.languages).every(
                        (val) => typeof val === "number"
                    )
                )).toBe(true);
            })
        }
    })
})