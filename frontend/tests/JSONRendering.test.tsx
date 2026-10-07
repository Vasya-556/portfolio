import {
    describe,
    it,
    expect
} from "vitest"
import { createRoot } from "react-dom/client";
import { act } from "react";
import { 
    Projects,
    Skills,
    Hero
} from "../src/components"
import skillsData from "../src/data/skills.json";
import projectsData from "../src/data/projects.json";
import heroData from "../src/data/hero.json";

describe("Test if json loads", () => {
    it("skills json", async () => {
        const container = document.createElement("div");
        document.body.appendChild(container);

        const root = createRoot(container);

        await act(async () => {
            root.render(<Skills/>)
        });
        
        Object.entries(skillsData).map((obj) => {
            for (const skill of obj[1]){
                expect(container.textContent).toContain(skill.name);
            }
        })

        root.unmount();
        container.remove();
    });

    it("hero json", async () => {
        const container = document.createElement("div");
        document.body.appendChild(container);

        const root = createRoot(container);

        await act(async () => {
            root.render(<Hero/>)
        });
        
        Object.entries(heroData["Contact me"]).map(([name, item]) => {
            expect(container.textContent).toContain(item.text);
        })

        root.unmount();
        container.remove();
    });

    it("projects json", async () => {
        const container = document.createElement("div");
        document.body.appendChild(container);

        const root = createRoot(container);

        await act(async () => {
            root.render(<Projects/>)
        });
        
        Object.entries(projectsData).map(([, project]) => {
            expect(container.textContent).toContain(project.name);
        })

        root.unmount();
        container.remove();
    });
});