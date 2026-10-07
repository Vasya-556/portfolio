import {
    describe,
    it,
    expect
} from "vitest";
import App from "../src/App";
import { createRoot } from "react-dom/client";
import { act } from "react";

describe("Test ui", () => {
    it("test App.tsx", async () => {
        const container = document.createElement("div");
        document.body.appendChild(container);

        const root = createRoot(container);

        await act(async () => {
            root.render(<App/>)
        });

        expect(container.querySelector("header")).not.toBeNull();
        expect(container.querySelector("#home")).not.toBeNull();
        expect(container.querySelector("#skills")).not.toBeNull();
        expect(container.querySelector("#projects")).not.toBeNull();
    })

    it("test theme toggle", async () => {
        const toggle = document.querySelector(".toggle");

        if (!(toggle instanceof HTMLInputElement)){
            throw new Error("Theme toggle not found");
        }

        const theme = document.documentElement.dataset.theme;

        await act(async () => {
            toggle.click();
        })

        expect(document.documentElement.dataset.theme).not.toBe(theme);
    })
})