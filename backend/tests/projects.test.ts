import { 
    describe, 
    it, 
    expect,
    beforeAll,
} from "vitest";
import { testsSetup } from "./testServer.js";

let baseURL: string;

beforeAll(() => {
    baseURL = testsSetup();
})

describe("Projects tests", () => {
    it("Get projects", async () => {
        const response = await fetch(`${baseURL}/projects`);

        expect(response.status).toBe(200);
    });
});