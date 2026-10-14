import {
    describe,
    it,
    expect,
    afterEach,
    beforeEach
} from "vitest"
import { createRoot } from "react-dom/client";
import { act } from "@testing-library/react";
import Projects from "../src/pages/projects/Projects";
import Skills from "../src/pages/skills/Skills";
import Home from "../src/pages/home/Home";
import skillsData from "../src/data/skills.json";
import projectsData from "../src/data/projects.json";
import heroData from "../src/data/hero.json";

let container: HTMLDivElement;
let root: ReturnType<typeof createRoot>;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    root = createRoot(container);
})

afterEach(() => {
    root.unmount();
    container.remove();
})

describe("Test if json loads", () => {
    it("skills json", async () => {
        await act(async () => {
            root.render(<Skills/>)
        });
        
        Object.entries(skillsData).map((obj) => {
            for (const skill of obj[1]){
                expect(container.textContent).toContain(skill.name);
            }
        })
    });

    it("hero json", async () => {
        await act(async () => {
            root.render(<Home/>)
        });
        
        Object.entries(heroData["Contact me"]).map(([name, item]) => {
            expect(container.textContent).toContain(item.text);
        })
    });

    it("projects json", async () => {
        await act(async () => {
            root.render(<Projects/>)
        });
        
        Object.entries(projectsData).map(([, project]) => {
            expect(container.textContent).toContain(project.name);
        })
    });
});